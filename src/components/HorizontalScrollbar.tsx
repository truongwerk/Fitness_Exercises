import { Box } from "@mui/material";
import { memo } from "react";
import BodyPart from "./BodyPart";

const HorizontalScrollbar = ({
	data,
	bodyPart,
	setBodyPart,
}: {
	data: Array<string>;
	bodyPart: string;
	setBodyPart: any;
}) => {
	console.log(data);
	return (
		<>
			{data.map((item) => (
				<Box key={item} m="0 40px">
					{item}
					<BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
				</Box>
			))}
		</>
	);
};

export default memo(HorizontalScrollbar);
