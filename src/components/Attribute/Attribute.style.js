import styled from 'styled-components';

const StyledAttribute = styled.p`

`;

const getType = (type) => {
  return {
    //Health
    '': '#ec2434',
    //Electro
    '': '#fcfb0a',
    //Hasty
    '': '#108fff',
    //Spicy
    '': '#a3fcfe',
    //Chilly
    '': '#ff9902',
    //Mighty
    '': '#fbfbe1',
    //Hearty
    '': '#fcfb0a',
    //Energizing
    '': '#05e704',
    //Enduring
    '': '#fcfb0a',
    //Tough
    '': '#f3f3cf',
    //Sneaky
    '': '#d03bfe',
    //Fireproof
    '': '#ec444a',
  }[type];
};

const StyledFont = styled.span`
  font-family: botw-icons-dual-color;
  //Look up what the colour should be based on the first character
  color: ${props => getType(props.children.charAt(0))};
`;

export {StyledAttribute, StyledFont};
