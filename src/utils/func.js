const listaIngredienti = [];

export const ingrListCreate = (lista) => {
	const lista1 = lista.map((item) => item.strIngredient1);
	const lista2 = lista.map((item) => item.strIngredient2);
	const lista3 = lista.map((item) => item.strIngredient3);
	const lista4 = lista.map((item) => item.strIngredient4);
	const lista5 = lista.map((item) => item.strIngredient5);
	const lista6 = lista.map((item) => item.strIngredient6);

	listaIngredienti = [lista1, lista2, lista3, lista4, lista5, lista6];

	return listaIngredienti;
};
