import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { memo, useEffect, useState } from "react";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";

const bodyParts = [
	"all",
	"back",
	"cardio",
	"chest",
	"lower arms",
	"lower legs",
	"neck",
	"shoulders",
	"upper arms",
	"upper legs",
	"waist",
];

const SearchExercises = ({
	setExercises,
	bodyPart,
	setBodyPart,
}: {
	setExercises: any;
	bodyPart: string;
	setBodyPart: any;
}) => {
	const [search, setSearch] = useState("");

	const handleSearch = async () => {
		const searchResult = search.toLocaleLowerCase().trim();
		setSearch("");
		if (searchResult) {
			const exerciseData = await fetchData(
				"https://exercisedb.p.rapidapi.com/exercises",
				exerciseOptions
			);

			const searchExercises = exerciseData.filter(
				(exercise: {
					name: string;
					target: string;
					equipment: string;
					bodyPart: string;
				}) =>
					exercise.name.toLocaleLowerCase().includes(searchResult) ||
					exercise.target.toLocaleLowerCase().includes(searchResult) ||
					exercise.equipment.toLocaleLowerCase().includes(searchResult) ||
					exercise.bodyPart.toLocaleLowerCase().includes(searchResult)
			);
			setExercises(searchExercises);
			console.log("response", searchExercises);
		}
	};

	return (
		<Stack alignItems="center" justifyContent="center" mt="37px" p="20px">
			<Typography
				fontWeight={700}
				sx={{
					fontSize: { lg: "44px", xs: "30px" },
					mb: "50px",
					textAlign: "center",
				}}
			>
				Awesome Exercises You <br />
				Should Know
			</Typography>
			<Box position="relative" mb="72px">
				<TextField
					sx={{
						height: "76px",
						width: { lg: "800px", sm: "500px", xs: "250px" },
						backgroundColor: "#FFF",
						borderRadius: "40px",
						input: { fontWeight: 700, border: "none", borderRadius: "4px" },
					}}
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					placeholder="Search Exercises"
					type="text"
				/>
				<Button
					className="search-btn"
					onClick={handleSearch}
					sx={{
						bgcolor: "#FF2625",
						color: "#FFF",
						textTransform: "none",
						width: { lg: "175px", xs: "60px" },
						height: "56px",
						position: "absolute",
						right: 0,
						fontSize: { lg: "20px", xs: "14px" },
					}}
				>
					Search
				</Button>
			</Box>
			<Box
				sx={{
					position: "relative",
					width: "100%",
					p: "20px",
				}}
			>
				<HorizontalScrollbar
					data={bodyParts}
					bodyPart={bodyPart}
					setBodyPart={setBodyPart}
					bodyParts
				/>
			</Box>
		</Stack>
	);
};

export default memo(SearchExercises);
