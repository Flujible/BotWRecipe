import React from "react";
import { storiesOf, action, withInfo } from "../../stories";

import Button from "./Button";

storiesOf("Button", module)
	.addDecorator((story, context) =>
		withInfo(Button.description)(story)(context),
	)
	.add("Standard", () => <Button onClick={action("clicked")}>Edit</Button>);
