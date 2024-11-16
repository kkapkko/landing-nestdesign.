import styleGallery from "./Gallery.module.css";

const dataGallery = [
	{
		id: 1,
		image: "/src/assets/images/image1.png",
		title: "Project title",
		subtitle: "UI, Art drection",
	},
	{
		id: 2,
		image: "/src/assets/images/image2.png",
		title: "Project title",
		subtitle: "UI, Art drection",
	},
	{
		id: 3,
		image: "/src/assets/images/image3.png",
		title: "Project title",
		subtitle: "UI, Art drection",
	},
	{
		id: 4,
		image: "/src/assets/images/image4.png",
		title: "Project title",
		subtitle: "UI, Art drection",
	},
	{
		id: 5,
		image: "/src/assets/images/image5.png",
		title: "Project title",
		subtitle: "UI, Art drection",
	},
	{
		id: 6,
		image: "/src/assets/images/image6.png",
		title: "Project title",
		subtitle: "UI, Art drection",
	},
];

const Gallery = () => {
	return (
		<section className={styleGallery.gallery} id="work">
			<div className="container">
				<h2 className={styleGallery.gallery_title}>Latest work</h2>
				<div className={styleGallery.gallery_container}>
					{dataGallery.map((item) => {
						return (
							<div className={styleGallery.gallery_item} key={item.id}>
								<div className={styleGallery.gallery_item__img}>
									<img src={item.image} alt="#" />
								</div>
								<h3 className={styleGallery.gallery_item__title}>
									{item.title}
								</h3>
								<p className={styleGallery.gallery_item__subtitle}>
									{item.subtitle}
								</p>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Gallery;
