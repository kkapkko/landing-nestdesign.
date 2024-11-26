import heroStyle from "./Hero.module.css";
import heroImage from "../../assets/images/hero-img.png";
import { motion } from "motion/react";
import {
	animationVariants,
	transitionSettings,
	viewportSettings,
} from "../../motion-setting";

const Hero = () => {
	return (
		<motion.section
			className={heroStyle.hero}
			initial={animationVariants.hidden}
			whileInView={animationVariants.visible}
			variants={animationVariants}
			transition={transitionSettings}
			viewport={viewportSettings}>
			<div className={heroStyle.hero_container}>
				<div className={heroStyle.hero_left}>
					<h3 className={heroStyle.hero_left__subtitle}>
						Branding | Image making
					</h3>
					<h1 className={heroStyle.hero_left__title}>Visual Designer</h1>
					<p className={heroStyle.hero_left__paragraph}>
						This is a template Figma file, turned into code using Anima. Learn
						more at AnimaApp.com
					</p>
					<a href="#" className={heroStyle.hero_left__button}>
						Contact
					</a>
				</div>
				<div className={heroStyle.hero_image}>
					<img src={heroImage} alt="hero-img" />
				</div>
			</div>
		</motion.section>
	);
};

export default Hero;
