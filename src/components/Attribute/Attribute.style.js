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
    //Spicy - the second character needs to lay over the first and have this color: #fbfbe1
    '': '#a3fcfe',
    //Chilly

    //Mighty

    //Hearty

    //Energizing

    //Enduring

    //Tough

    //Sneaky

    //Fireproof

  }[type];
};

const StyledFont = styled.span`
  font-family: botw-icons-dual-color;
  color: ${props => getType(props.children.charAt(0))};
`;

export {StyledAttribute, StyledFont};
