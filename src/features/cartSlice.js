import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const initialState = {
	cartItems: localStorage.getItem('cartItems')
		? JSON.parse(localStorage.getItem('cartItems'))
		: [],
	cartTotalQuantity: 0,
	cartTotalAmount: 0,
};

const toastifyOptions = {
	position: 'bottom-left',
	icon: false,
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart(state, action) {
			const itemIndex = state.cartItems.findIndex(
				(item) => item.id === action.payload.id
			);
			if (itemIndex >= 0) {
				state.cartItems[itemIndex].cartQuantity += 1;

				let multipleItemsText = `Increased ${
					state.cartItems[itemIndex].title
				} quantity to ${state.cartItems[itemIndex].cartQuantity}`;

				// Show a toast when quantity is increased
				if (window.location.href.indexOf('cart') !== -1) {
					toast.info(multipleItemsText, toastifyOptions);
				} else {
					toast.info(multipleItemsText, toastifyOptions);
					// Optionally, trigger a UI update to show GoToCartButton elsewhere
				}
			} else {
				const tempProduct = { ...action.payload, cartQuantity: 1 };
				state.cartItems.push(tempProduct);
				let firstItemText = `${action.payload.title} added to cart`

				toast.success(firstItemText, toastifyOptions);
				// Optionally, trigger a UI update to show GoToCartButton elsewhere
			}
			localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
		},
		removeFromCart(state, action) {
			const nextCartItems = state.cartItems.filter(
				(cartItem) => cartItem.id !== action.payload.id
			);
			state.cartItems = nextCartItems;
			localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
			toast.error(`${action.payload.title} removed from cart`, toastifyOptions);
		},
		decreaseCart(state, action) {
			const itemIndex = state.cartItems.findIndex(
				(cartItem) => cartItem.id === action.payload.id
			);
			if (state.cartItems[itemIndex].cartQuantity > 1) {
				state.cartItems[itemIndex].cartQuantity -= 1;
				toast.info(
					`Decreased ${action.payload.title} cart quantity`,
					toastifyOptions
				);
			} else if (state.cartItems[itemIndex].cartQuantity === 1) {
				const nextCartItems = state.cartItems.filter(
					(cartItem) => cartItem.id !== action.payload.id
				);
				state.cartItems = nextCartItems;
				toast.error(
					`${action.payload.title} removed from cart`,
					toastifyOptions
				);
			}
			localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
		},
		clearCart(state) {
			state.cartItems = [];
			toast.error(`Cart cleared`, toastifyOptions);
			localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
		},
		getTotals(state, action) {
			let { total: cartTotalAmount, quantity: cartTotalQuantity } = state.cartItems.reduce(
				(cartTotal, cartItem) => {
					const { price, cartQuantity } = cartItem;
					const itemTotal = price * cartQuantity;
		
					cartTotal.total += itemTotal;
					cartTotal.quantity += cartQuantity;
		
					return cartTotal;
				},
				{
					total: 0,
					quantity: 0,
				}
			);
			state.cartTotalQuantity = cartTotalQuantity;
			state.cartTotalAmount = cartTotalAmount;
		},
	},
});

export const { addToCart, removeFromCart, decreaseCart, clearCart, getTotals } =
	cartSlice.actions;

export default cartSlice.reducer;
