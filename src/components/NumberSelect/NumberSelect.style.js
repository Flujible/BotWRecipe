import Styled from 'styled-components';

const StyledInput = Styled.input`
    font-family: 'Catamaran';
    font-size: 1em;
    height: 37px;
    margin-right: 5px;
    display: block;
`;

const StyledLabel = Styled.label`
    font-size: 0.7em;
    display: block;
`;

const StyledInputWrapper = Styled.div`
    display: inline-block;
`;

export { StyledInput, StyledLabel, StyledInputWrapper };
