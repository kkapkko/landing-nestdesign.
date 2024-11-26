export const animationVariants = {
	hidden: { opacity: 0 }, // Початковий стан
	visible: { opacity: 1 }, // Стан після анімації
};

export const transitionSettings = {
	duration: 0.3, // Тривалість анімації
	ease: "easeOut", // Тип анімаційної кривої
};

export const viewportSettings = {
	once: false, // Анімація спрацьовує лише раз
	amount: 0.5, // 50% елемента повинно бути у вікні перегляду
};
