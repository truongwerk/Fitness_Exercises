export const exerciseOptions = {
	method: "GET",
	headers: {
		"X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
		"X-RapidAPI-Key": process.env.RAPID_API_KEY,
	},
};

export const fetchData = async (url: string, option: object) => {
	const response = await fetch(url, option);
	const data = await response.json();
	return data;
};
