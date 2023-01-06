import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
	const { cartTotalQuantity } = useSelector((state) => state.cart);

	return (
		<div className='navbar-background'>
			<nav className='navbar'>
				<Link to='/online-shop/' className='title'>
					React Online Shop
				</Link>
				<Link to='/online-shop/cart'>
					<div className='nav-bag'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='currentColor'
							className='bi bi-bag'
							viewBox='0 0 16 16'>
							<path d='M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z' />
						</svg>
						<span className='nav-quantity'>
							<span>{cartTotalQuantity}</span>
						</span>
					</div>
				</Link>
			</nav>
		</div>
	);
};

export default Navbar;
