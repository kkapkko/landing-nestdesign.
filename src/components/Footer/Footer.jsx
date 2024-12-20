import { motion } from "motion/react";
import styleFooter from "./Footer.module.css";
import { footerText, footerServices } from "./footer-data";
import {
	animationVariants,
	transitionSettings,
	viewportSettings,
} from "../../motion-setting";

const Footer = () => {
	return (
		<motion.footer
			className={styleFooter.footer}
			id="contact"
			initial={animationVariants.hidden}
			whileInView={animationVariants.visible}
			variants={animationVariants}
			transition={transitionSettings}
			viewport={viewportSettings}>
			<div className="container">
				<h1 className={styleFooter.footer_title}>Lets work together</h1>
				<div className={styleFooter.footer_container}>
					<div className={styleFooter.footer_content}>
						<p className={styleFooter.footer_content__text}>{footerText}</p>
						<div className={styleFooter.footer_content__social}>
							{footerServices.map((item) => {
								return (
									<a
										href={item.link}
										className={styleFooter.footer_content__social_link}
										key={item.id}>
										<img src={item.icon} alt={item.name} />
									</a>
								);
							})}
						</div>
					</div>
					<form className={styleFooter.footer_form}>
						<input type="text" placeholder="Name" />
						<input type="email" placeholder="Email" />
						<button className={styleFooter.footer_form__submit}>Submit</button>
					</form>
				</div>
			</div>
		</motion.footer>
	);
};

export default Footer;
