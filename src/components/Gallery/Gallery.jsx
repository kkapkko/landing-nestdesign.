import { motion } from "motion/react";
import styleGallery from "./Gallery.module.css";
import { dataGallery } from "./data-gallery";
import {
	animationVariants,
	transitionSettings,
	viewportSettings,
} from "../../motion-setting";

const Gallery = () => {
	return (
		<section className={styleGallery.gallery} id="work">
			<div className="container">
				<h2 className={styleGallery.gallery_title}>Latest work</h2>
				<div className={styleGallery.gallery_container}>
					{dataGallery.map((item) => {
						return (
							<motion.div
								className={styleGallery.gallery_item}
								key={item.id}
								initial={animationVariants.hidden}
								whileInView={animationVariants.visible}
								variants={animationVariants}
								transition={transitionSettings}
								viewport={viewportSettings}>
								<div className={styleGallery.gallery_item__img}>
									<img src={item.image} alt="#" />
								</div>
								<h3 className={styleGallery.gallery_item__title}>
									{item.title}
								</h3>
								<p className={styleGallery.gallery_item__subtitle}>
									{item.subtitle}
								</p>
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Gallery;
