import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { exerciseOptions, fetchData } from "../utils/fetchData";

const SearchExercises = () => {
	const [search, setSearch] = useState("");

	const handleSearch = async () => {
		if (search) {
			const exerciseData = await fetchData(
				"https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
				exerciseOptions
			);
			console.log("?", exerciseData);
			setSearch("");
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
					onChange={(e) => setSearch(e.target.value.toLowerCase())}
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
		</Stack>
	);
};

export default SearchExercises;
