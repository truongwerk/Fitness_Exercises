import React, { useContext } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { Box, Typography } from "@mui/material";

import ExerciseCard from "./ExerciseCard";
import BodyPart from "./BodyPart";
import RightArrowIcon from "../assets/icons/right-arrow.png";
import LeftArrowIcon from "../assets/icons/left-arrow.png";

const LeftArrow = () => {
	const { scrollPrev } = useContext(VisibilityContext);

	return (
		<Typography onClick={() => scrollPrev()} className="right-arrow">
			<img src={LeftArrowIcon} alt="right-arrow" />
		</Typography>
	);
};

const RightArrow = () => {
	const { scrollNext } = useContext(VisibilityContext);

	return (
		<Typography onClick={() => scrollNext()} className="left-arrow">
			<img src={RightArrowIcon} alt="right-arrow" />
		</Typography>
	);
};

const ScrollMenuItem = ({
	item,
	itemId,
	bodyParts,
	setBodyPart,
	bodyPart,
}: {
	item: any;
	itemId: any;
	bodyPart: string;
	setBodyPart: any;
	bodyParts: any;
}) => {
	return (
		<Box title={item.id || item} m="0 40px">
			{bodyParts ? (
				<BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} />
			) : (
				<ExerciseCard exercise={item} />
			)}
		</Box>
	);
};

const HorizontalScrollbar = ({
	data,
	bodyParts,
	setBodyPart,
	bodyPart,
}: {
	data: Array<any>;
	bodyPart: string;
	setBodyPart: any;
	bodyParts: any;
}) => (
	<ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
		{data.map((item) => (
			<ScrollMenuItem
				key={item.id || item}
				itemId={item.id || item}
				item={item}
				bodyParts={bodyParts}
				setBodyPart={setBodyPart}
				bodyPart={bodyPart}
			/>
		))}
	</ScrollMenu>
);

export default HorizontalScrollbar;
