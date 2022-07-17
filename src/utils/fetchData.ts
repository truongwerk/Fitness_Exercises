export const exerciseOptions = {
	method: "GET",
	headers: {
		"X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
		"X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
	},
};

export const fetchData = async (url: string, option: object) => {
	const response = await fetch(url, option);
	const data = await response.json();
	return data;
};
