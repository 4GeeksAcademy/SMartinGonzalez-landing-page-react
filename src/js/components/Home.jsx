import React from "react";
import Navbar from "./Navbar";
import Intro from "./Intro";
import Cards from "./Cards";
import Footer from "./Footer";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


const cards = [
	{
		image: "https://media.ambito.com/p/c68f08f4006126b33bffd84d6942708b/adjuntos/239/imagenes/041/789/0041789778/1200x675/smart/greciajpg.jpg",
		title: "Grecia",
		description: "Mejores destinos en Grecia",
	},
	{
		image: "https://media.ambito.com/p/3c2737f062d6cacd18dd23eb70fb6e68/adjuntos/239/imagenes/040/730/0040730648/portugal-banderawebp.png",
		title: "Portugal",
		description: "Mejores destinos en Portugal",
	},
	{
		image: "https://www.cronista.com/files/image/478/478511/63236e869c3ce.jpg",
		title: "España",
		description: "Mejores destinos en España",
	},
	{
		image: "https://turismocero.com/galeria/fotos/2024/05/29/o_1717014111.jpeg",
		title: "Noruega",
		description: "Mejores destinos en Noruega",
	}
];

//create your first component
const Home = () => {
	return (
		<div className="text-center">
				<Navbar/>
				<Intro/>
			<div className="container">
				<div className="row">
					{cards.map((item, index) => (
						<div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={index}>
							<Cards cards={item} />
						</div>
					))}
				</div>
			</div>
			<Footer/>
		</div>
		);
	};

export default Home;