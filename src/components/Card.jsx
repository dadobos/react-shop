import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, getTotals } from "../features/cartSlice";

const Card = ({ product }) => {
	const dispatch = useDispatch();

	const cart = useSelector((state) => state.cart);
	useEffect(() => {
		dispatch(getTotals());
	}, [cart, dispatch]);

	const handleAddToCart = (product) => {
		dispatch(addToCart(product));
	};
	return (
		<div className="card-container">
			<h3 className="title">{product.title}</h3>
			<div className="image-container">
				<img src={product.images[0]} alt={product.title} />
			</div>
			<div className="category">
				<span>{product.category}</span>
				<span>{product.availabilityStatus}</span>
			</div>
			<p className="description">{product?.description}</p>

			<div>
				<p className="discount">
					<span>Discount:</span>
					<span>{Math.round(product.discountPercentage)} %</span>
				</p>
				<p className="stock">
					<span>Stock:</span>
					<span>{product.stock}</span>
				</p>
				<p className="price">
					<span>Price:</span>
					<span>€{product.price}</span>
				</p>
			</div>
			<button onClick={() => handleAddToCart(product)}>Add to cart</button>
		</div>
	);
};

export default Card;
