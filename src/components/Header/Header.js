import React from 'react';
import PropTypes from "prop-types";
import StyledHeader from './Header.style';

const Header = ({ children }) => (
    <StyledHeader>{children}</StyledHeader>
);

export default Header;