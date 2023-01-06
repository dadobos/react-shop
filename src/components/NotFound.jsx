import BackHomeButton from './BackHomeButton'

const NotFound = () => {
	return (
		<div className='not-found'>
			<h2>404</h2>
			<p>Page not found</p>
			<BackHomeButton text={"Home"}/>
		</div>
	);
};

export default NotFound;
