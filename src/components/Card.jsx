import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, getTotals } from '../features/cartSlice';

import  Capitalize  from './Capitalize';

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
		<>
			<h3 className='title'>{Capitalize(product?.title  ?? "")}</h3>
			<div className='image-container'>
				<img src={product.images[0]} alt={Capitalize(product?.title ?? "")} />
			</div>
			<div className='category'>
				<span>{Capitalize(product?.category ?? "")}</span>
				<span>{Capitalize(product?.brand ?? "")}</span>
			</div>
			<p className='description'>{Capitalize(product?.description ?? "")}</p>
			<div>
				<p className='discount'>
					<span>Discount: </span>
					<span>{product.discountPercentage}%</span>
				</p>
				<p className='price'>
					<span>Price:</span>
					<span>€{product.price}</span>
				</p>
				<p className='stock'>
					<span>Stoc:</span>
					<span>{product.stock}</span>
				</p>
			</div>
			<button onClick={() => handleAddToCart(product)}>Add to cart</button>
		</>
	);
};

export default Card;
