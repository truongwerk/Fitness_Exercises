import { Box } from "@mui/material";
import { memo } from "react";

const HorizontalScrollbar = ({ data }: { data: Array<string> }) => {
	console.log(data);
	return (
		<>
			{data.map((item) => (
				<Box key={item} m="0 40px">
					{item}
				</Box>
			))}
		</>
	);
};

export default memo(HorizontalScrollbar);
