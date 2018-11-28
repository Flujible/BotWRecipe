import React from "react";
import PropTypes from "prop-types";
import {
	StyledAttribute,
	StyledFont,
	StyledIconPart,
} from "./Attribute.style.js";
import icons from "../../libs/icons.js";

const getContent = (title, value) => {
	let content = [];
	if (title === "Health") {
		const remainder = value % 1;
		console.log(remainder);
		const integer = value - remainder;
		let length;
		if (remainder === 0) {
			length = icons[title].icon.length - 1;
		} else {
			length = icons[title][remainder].icon.length - 1;
		}

		for (let index = 0; index < integer; index++) {
			//Push a styledIconPart with the full heart icon to the content array
			icons[title].icon.map((key, index) => {
				if (index === 0) {
					//Sets the 'first' prop to true
					content.push(
						<StyledIconPart title={title} first={true}>
							{key}
						</StyledIconPart>,
					);
				} else if (index === length) {
					//Sets the 'final' prop to true
					content.push(
						<StyledIconPart title={title} final={true}>
							{key}
						</StyledIconPart>,
					);
				}
			});
		}

		if (remainder !== 0) {
			icons[title][remainder].icon.map((key, index) => {
				if (index === 0) {
					//Sets the 'first' prop to true
					content.push(
						<StyledIconPart title={title} first={true}>
							{key}
						</StyledIconPart>,
					);
				} else if (index === length) {
					//Sets the 'final' prop to true
					content.push(
						<StyledIconPart title={title} final={true}>
							{key}
						</StyledIconPart>,
					);
				} else {
					content.push(<StyledIconPart>{key}</StyledIconPart>);
				}
			});
		}
	} else {
		const length = icons[title].icon.length - 1;
		for (let i = 0; i < value; i++) {
			icons[title].icon.map((key, index) => {
				if (index === 0) {
					//Sets the 'first' prop to true
					content.push(
						<StyledIconPart title={title} first={true}>
							{key}
						</StyledIconPart>,
					);
				} else if (index === length) {
					//Sets the 'final' prop to true
					content.push(
						<StyledIconPart title={title} final={true}>
							{key}
						</StyledIconPart>,
					);
				} else {
					content.push(<StyledIconPart>{key}</StyledIconPart>);
				}
			});
		}
	}

	return content;
};

const Attribute = ({ title, value, duration }) => {
	//Render the icons alongside the value given
	return duration ? (
		<StyledAttribute>
			{title}: <StyledFont title={title}>{getContent(title, value)}</StyledFont>{" "}
			(Duration: {duration} seconds)
		</StyledAttribute>
	) : (
		<StyledAttribute>
			{title}: <StyledFont title={title}>{getContent(title, value)}</StyledFont>
		</StyledAttribute>
	);
};

Attribute.description = `
  Attributes are used to show what a food item provides for Link once eaten, for
  example 2 hearts of health or medium shock resistance
`;

const AttrCategories = [
	"Health",
	"Electro",
	"Hasty",
	"Spicy",
	"Chilly",
	"Mighty",
	"Hearty",
	"Energizing",
	"Enduring",
	"Tough",
	"Sneaky",
	"Fireproof",
];

Attribute.propTypes = {
	/** The main text of the attribute to show e.g. "Health:" or "Effect:"*/
	title: PropTypes.oneOf(AttrCategories).isRequired,

	/** The numerical amount of effect that the attribute offers e.g. if a recipe
  heals Link for 2 hearts this value should be 2 ❤️❤️*/
	value: PropTypes.number.isRequired,

	/** The amoung of time the effect lasts for in seconds*/
	duration: PropTypes.number,
};

export default Attribute;
