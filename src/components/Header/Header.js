import React from 'react';
import PropTypes from 'prop-types';
import StyledHeader from './Header.style.js'

const Header = ({children}) => {
  return <StyledHeader>{children}</StyledHeader>;
}

Header.description = `
  Headers are used to title a recipe with its given name from the game.
  `
Header.propTypes = {
  /** Text that appears in the title*/
  children: PropTypes.string.isRequired,
}

export default Header;
