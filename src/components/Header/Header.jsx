import { useEffect, useState } from "react";
import headerStyle from "./Header.module.css";

const listMenuLink = [
	{ id: 1, name: "About", link: "#about" },
	{ id: 2, name: "Work", link: "#work" },
	{ id: 3, name: "Testimonial", link: "#testimonial" },
	{ id: 4, name: "Contact", link: "#contact" },
];

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	const closeMenu = () => {
		setIsOpen(false);
	};

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
		return () => {
			document.body.style.overflow = "auto";
		};
	}, [isOpen]);

	return (
		<header className={headerStyle.header}>
			<div className="container">
				<div className={headerStyle.header_container}>
					<a href="#" className={headerStyle.header_logo}>
						NestDesign.
					</a>
					<nav
						className={`${headerStyle.header_menu} ${
							isOpen ? headerStyle.header_menu__active : ""
						}`}
						onClick={closeMenu}>
						{listMenuLink.map((item) => {
							return (
								<a
									onClick={closeMenu}
									href={item.link}
									className={headerStyle.header_menu__link}
									key={item.id}>
									{item.name}
								</a>
							);
						})}
					</nav>
					<div
						className={`${headerStyle.header_menu__btn} ${
							isOpen ? headerStyle.header_menu__btn_active : ""
						}`}
						onClick={toggleMenu}>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
