const Footer = () => {
	const getCurrentYear = () => {
		return new Date().getFullYear();
	};

	return <div className='footer'>Dan Dobos &copy; {getCurrentYear()}</div>;
};

export default Footer;
