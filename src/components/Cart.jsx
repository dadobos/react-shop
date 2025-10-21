import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	addToCart,
	decreaseCart,
	removeFromCart,
	clearCart,
	getTotals,
} from '../features/cartSlice';

import BackHomeButton from './BackHomeButton';

const Cart = () => {
	const cart = useSelector((state) => state.cart);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getTotals());
	}, [cart, dispatch]);

	const handleRemoveFromCart = (cartItem) => {
		dispatch(removeFromCart(cartItem));
	};
	const handleDecreaseCart = (cartItem) => {
		dispatch(decreaseCart(cartItem));
	};
	const handleIncreaseCart = (cartItem) => {
		dispatch(addToCart(cartItem));
	};
	const handleClearCart = () => {
		dispatch(clearCart());
	};

	return (
		<div className='responsive-layout'>
			<div className='cart-container'>
				<h2>Cart</h2>
				{cart.cartItems.length === 0 ? (
					<div className='no-cart-items'>
						<p>Your cart is empty</p>
						<BackHomeButton text={'Start Shopping'} />
					</div>
				) : (
					<div>
						<div className='titles'>
							<h3 className='product-title'>Product</h3>
							<h3>Price</h3>
							<h3>Quantity</h3>
							<h3 className='total-title'>Total</h3>
						</div>
						<>
							{cart.cartItems?.map((cartItem) => (
								<div className='cart-item' key={cartItem.id}>
									<div className='cart-product'>
										<img src={cartItem.images[0]} alt={cartItem.title} />
										<div>
											<h3>{cartItem.title}</h3>
											<p>{cartItem.description}</p>
											<button onClick={() => handleRemoveFromCart(cartItem)}>
												Remove
											</button>
										</div>
									</div>
									<div className='price'>€{cartItem.price}</div>
									<div className='quantity'>
										<button onClick={() => handleDecreaseCart(cartItem)}>
											-
										</button>
										<div className='count'>{cartItem.cartQuantity}</div>
										<button onClick={() => handleIncreaseCart(cartItem)}>
											+
										</button>
									</div>
									<div className='total-price'>
										
										€{Math.round((cartItem.price * cartItem.cartQuantity) * 100)/100}
									</div>
								</div>
							))}
						</>
						<div className='cart-summary'>
							<button className='clear-cart' onClick={() => handleClearCart()}>
								Clear Cart
							</button>
							<div className='cart-checkout'>
								<div className='subtotal'>
									<span>Subtotal</span>
									<span className='amount'>€{Math.round(cart.cartTotalAmount * 100)/100}</span>
								</div>
								<button className='button' >Checkout</button>
							</div>
						</div>
						<div className='continue-shopping'>
							<BackHomeButton text={'Continue Shopping'} />
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Cart;
