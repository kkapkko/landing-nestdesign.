import styleTestimonial from "./Testimonial.module.css";
import { testimonialData } from "./testimonial-data";

const Testimonial = () => {
	return (
		<section className={styleTestimonial.testimonial} id="testimonial">
			<div className="container">
				<h2 className={styleTestimonial.testimonial_title}>Testimonial</h2>
				<div className={styleTestimonial.testimonial_container}>
					{testimonialData.map((item) => {
						return (
							<div className={styleTestimonial.testimonial_card} key={item.id}>
								<p className={styleTestimonial.testimonial_card__text}>
									{item.text}
								</p>
								<div className={styleTestimonial.testimonial_card__bottom}>
									<div className={styleTestimonial.testimonial_card__avatar}>
										<img src={item.avatar} alt={item.name} />
									</div>
									<div className={styleTestimonial.testimonial_card__info}>
										<span>{item.stars}</span>
										<h5>{item.name}</h5>
										<h6>{item.subtitle}</h6>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Testimonial;
