const ingrListCreate = (data) => {
	const listMap = Object.entries(data);
	const filterIngrList = listMap.filter(
		(drink) => drink[0].includes("strIngredient") && drink[1],
	);
	const ingredients = filterIngrList.map((item) => item[1]);

	return ingredients;
};

export default ingrListCreate;
