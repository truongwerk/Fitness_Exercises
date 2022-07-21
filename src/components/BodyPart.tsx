import { Stack, Typography } from "@mui/material";
import React from "react";

import Icon from "../assets/icons/gym.png";

const BodyPart = ({
	item,
	bodyPart,
	setBodyPart,
}: {
	item: string;
	bodyPart: string;
	setBodyPart: any;
}) => {
	return (
		<Stack
			alignItems="center"
			justifyContent="center"
			className="bodyPart-card"
		>
			<img src={Icon} alt="icon" style={{ width: "40px", height: "40px" }} />
		</Stack>
	);
};

export default BodyPart;
