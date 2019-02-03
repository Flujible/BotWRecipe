import React from 'react';
import PropTypes from 'prop-types';
import {
	StyledAttribute,
	StyledFont,
	StyledIconPart,
	StyledAttributeInput,
} from './Attribute.style.js';
import icons from '../../libs/icons';
import Dropdown from '../Dropdown/Dropdown';
import NumberSelect from '../NumberSelect/NumberSelect.js';

const getContent = (title, value) => {
	let content = [];
	if (title === 'Health') {
		const remainder = value % 1;
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
				return content;
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

const getOptions = obj => Object.keys(obj);

const attrDropdownValues = getOptions(icons);

const Attribute = ({ title, value, duration, edit }) => {
	//Render the icons alongside the value given
	return edit ? (
		<StyledAttributeInput>
			<Dropdown selected={title} options={attrDropdownValues} />
			<NumberSelect value={value} min={0} max={20} />
			<NumberSelect value={duration} min={0} max={750} />
		</StyledAttributeInput>
	) : (
		<StyledAttribute>
			{title}:
			<StyledFont title={title}>{getContent(title, value)}</StyledFont>
			{duration && `(Duration: ${duration} seconds)`}
		</StyledAttribute>
	);
};

Attribute.description = `
  Attributes are used to show what a food item provides for Link once eaten, for
  example 2 hearts of health or medium shock resistance
`;

//Programatically calculating these doesn't seem to make the list appear in storybook
const AttrCategories = [
	'Health',
	'Electro',
	'Hasty',
	'Spicy',
	'Chilly',
	'Mighty',
	'Hearty',
	'Energizing',
	'Enduring',
	'Tough',
	'Sneaky',
	'Fireproof',
];

Attribute.propTypes = {
	/** The main text of the attribute to show e.g. "Health:" or "Effect:"*/
	title: PropTypes.oneOf(AttrCategories).isRequired,

	/** The numerical amount of effect that the attribute offers e.g. if a recipe
  heals Link for 2 hearts this value should be 2 ❤️❤️*/
	value: PropTypes.number.isRequired,

	/** The amoung of time the effect lasts for in seconds*/
	duration: PropTypes.number,

	/** Defines if the component should be rendered in edit mode */
	edit: PropTypes.bool,
};

export default Attribute;
