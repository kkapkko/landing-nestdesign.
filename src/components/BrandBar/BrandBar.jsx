import { motion } from "motion/react";
import styleBrandBar from "./BrandBar.module.css";
import {
	animationVariants,
	transitionSettings,
	viewportSettings,
} from "../../motion-setting";

const logoBrands = [
	{ id: 1, link: "./assets/images/google.svg", alt: "Google" },
	{ id: 2, link: "./assets/images/nike.svg", alt: "Nike" },
	{ id: 3, link: "./assets/images/samsung.svg", alt: "Samsung" },
	{ id: 4, link: "./assets/images/apple.svg", alt: "Apple" },
	{ id: 5, link: "./assets/images/adidas.svg", alt: "Adidas" },
];

const BrandBar = () => {
	return (
		<motion.section
			className={styleBrandBar.brands}
			initial={animationVariants.hidden}
			whileInView={animationVariants.visible}
			variants={animationVariants}
			transition={transitionSettings}
			viewport={viewportSettings}>
			<div className={styleBrandBar.brands_container}>
				{logoBrands.map((item) => {
					return <img src={item.link} alt={item.alt} key={item.id} />;
				})}
			</div>
		</motion.section>
	);
};

export default BrandBar;
