import styleSkills from "./Skills.module.css";

const skillsData = [
	{
		id: 1,
		image: "/src/assets/images/skills-1.svg",
		title: "Product Design",
		description:
			"This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
	},
	{
		id: 2,
		image: "/src/assets/images/skills-2.svg",
		title: "Visual Design",
		description:
			"This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
	},
	{
		id: 3,
		image: "/src/assets/images/skills-3.svg",
		title: "Art Direction",
		description:
			"This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
	},
];

const Skills = () => {
	return (
		<section className={styleSkills.skills} id="about">
			<div className="container">
				<div className={styleSkills.skills_container}>
					{skillsData.map((item) => {
						return (
							<div key={item.id} className={styleSkills.skills_card}>
								<img src={item.image} alt="#" />
								<div className={styleSkills.skills_card__titles}>
									<h3>{item.title}</h3>
									<p>{item.description}</p>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Skills;
