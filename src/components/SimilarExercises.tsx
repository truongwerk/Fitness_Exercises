import { Typography, Box, Stack } from "@mui/material";

import HorizontalScrollbar from "./HorizontalScrollbar";
import Loader from "./Loader";

const SimilarExercises = ({
	targetMuscleExercises,
	equipmentExercises,
}: {
	targetMuscleExercises: Array<object>;
	equipmentExercises: Array<object>;
}) => (
	<Box sx={{ mt: { lg: "100px", xs: "0px" } }}>
		<Typography
			sx={{ fontSize: { lg: "44px", xs: "25px" }, ml: "20px" }}
			fontWeight={700}
			color="#000"
			mb="33px"
		>
			Similar{" "}
			<span style={{ color: "#FF2625", textTransform: "capitalize" }}>
				Target Muscle
			</span>{" "}
			exercises
		</Typography>
		<Stack direction="row" sx={{ p: 2, position: "relative" }}>
			{targetMuscleExercises.length !== 0 ? (
				<HorizontalScrollbar
					data={targetMuscleExercises}
					bodyPart=""
					setBodyPart
					bodyParts={false}
				/>
			) : (
				<Loader />
			)}
		</Stack>
		<Typography
			sx={{
				fontSize: { lg: "44px", xs: "25px" },
				ml: "20px",
				mt: { lg: "100px", xs: "60px" },
			}}
			fontWeight={700}
			color="#000"
			mb="33px"
		>
			Similar{" "}
			<span style={{ color: "#FF2625", textTransform: "capitalize" }}>
				Equipment
			</span>{" "}
			exercises
		</Typography>
		<Stack direction="row" sx={{ p: 2, position: "relative" }}>
			{equipmentExercises.length !== 0 ? (
				<HorizontalScrollbar
					data={equipmentExercises}
					bodyPart=""
					setBodyPart
					bodyParts={false}
				/>
			) : (
				<Loader />
			)}
		</Stack>
	</Box>
);

export default SimilarExercises;
