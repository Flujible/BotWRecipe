import styled from 'styled-components';
import icons from '../../libs/icons.js';

const StyledAttribute = styled.p``;

//Look up the colours based on the title of the object from /libs/icons
const getColour = title => icons[title].color;
const getSecColour = title => icons[title].secondaryColor;

const StyledFont = styled.span`
	font-family: botw-icons-dual-color;
	//Look up what the colour should be based on the first character
	color: ${props => getColour(props.title)};
`;

const StyledIconPart = styled.span`
	margin-left: ${props => (props.first ? '' : '-1em')};
	color: ${props => (props.final ? getSecColour(props.title) : 'inherit')};
`;

const StyledAttributeInput = styled.div``;

const StyledAttrTitleInput = styled.input``;

const StyledAttrValueInput = styled.input``;

const StyledAttrDurationInput = styled.input``;

export {
	StyledAttribute,
	StyledFont,
	StyledIconPart,
	StyledAttributeInput,
	StyledAttrTitleInput,
	StyledAttrValueInput,
	StyledAttrDurationInput,
};
