export function idsForCustomCompo(element) {
	 // Vérifier si l'élément existe
	 if (!element) {
		console.error("L'élément est inexistant.");
		return null;	
	}

	// Utiliser getAttribute pour obtenir la valeur de l'attribut 'id'
	const custId = element.getAttribute('id');
	const custClass = element.getAttribute('class');

	// Si l'élément n'a pas d'attribut 'id', renvoyer null ou une valeur par défaut
	if (custId === null) {
			console.warn("L'élément n'a pas d'attribut 'id'.");
			return null; // ou retourner une valeur par défaut, selon vos besoins
	}
	if (custClass === null) {
		console.warn("L'élément n'a pas d'attribut 'id'.");
		return null; // ou retourner une valeur par défaut, selon vos besoins
}

	// Retourner la valeur de l'attribut 'id'
	return {custId, custClass};
}