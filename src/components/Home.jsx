import { useGetProductsQuery } from "../features/productsApi";
import Tilt from "./Tilt";
import Card from "./Card";

const Home = () => {
	const { data, error, isLoading } = useGetProductsQuery();

	return (
		<div className="responsive-layout">
			<section className="home-container">
				<h2>Products</h2>
				{isLoading ? (
					<p className="spinner"></p>
				) : error ? (
					<p>An error occoured: {error} </p>
				) : (
					<>
						{data.products?.map((product) => (
							<Tilt
								key={product.id}
								options={{
									reverse: true,
									speed: 300,
			
									easing: "cubic-bezier(.09,.67,.54,.76)",
									gyroscope: true,
								}}>
								<article className="card-list" >
							
									<Card  product={product} />
								</article>
							</Tilt>
						))}
					</>
				)}
			</section>
		</div>
	);
};

export default Home;
