import { Box } from "@mui/system";
import Exercises from "../components/Exercises";
import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";
import { useState } from "react";

const Home = () => {
	const [exercises, setExercises] = useState([]);
	const [bodyPart, setBodyPart] = useState("all");

	console.log(bodyPart);

	return (
		<Box>
			<HeroBanner />
			<SearchExercises
				setExercises={setExercises}
				bodyPart={bodyPart}
				setBodyPart={setBodyPart}
			/>
			<Exercises
				exercises={exercises}
				setExercises={setExercises}
				bodyPart={bodyPart}
			/>
		</Box>
	);
};

export default Home;
