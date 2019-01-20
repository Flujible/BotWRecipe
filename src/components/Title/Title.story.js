import React from "react";
import { storiesOf, action, withInfo } from "../../stories";

import Title from "./Title";

storiesOf("Title", module)
	.addDecorator((story, context) =>
		withInfo(Title.description)(story)(context),
	)
	.add("Standard", () => <Title>Pumpkin Stew</Title>);
