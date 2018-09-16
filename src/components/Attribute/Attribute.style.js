import styled from 'styled-components';
import icons from '../../libs/icons.js'

const StyledAttribute = styled.p`

`;

const getColour = (title) => {
  return icons[title].color;
};

const getSecColour = (title) => {
  return icons[title].secondaryColor;
};

const StyledFont = styled.span`
  font-family: botw-icons-dual-color;
  //Look up what the colour should be based on the first character
  color: ${props => getType(props.children.charAt(0))};
`;

export {StyledAttribute, StyledFont, StyledIconPart};
