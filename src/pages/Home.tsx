import { Box } from "@mui/system";
import Exercises from "../components/Exercises";
import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";

const Home = () => {
	return (
		<Box>
			<HeroBanner />
			<SearchExercises />
			<Exercises />
		</Box>
	);
};

export default Home;
