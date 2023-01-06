import { useGetProductsQuery } from '../features/productsApi';
import Card from './Card';

const Home = () => {
	const { data, error, isLoading } = useGetProductsQuery();

	return (
		<div className='responsive-layout'>
			<section className='home-container'>
			<h2>Products</h2>
				{isLoading ? (
					<p className='spinner'></p>
				) : error ? (
					<p>An error occoured: {error} </p>
				) : (
					<>
						{data.products?.map((product) => (
							<article className='card-list' key={product.id}>
								<Card product={product} />
							</article>
						))}
					</>
				)}
			</section>
		</div>
	);
};

export default Home;
