import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-md';

const Nav = ({ className }) => <Button icon><img src='logo.png'></img></Button>;
Nav.propTypes = {
  className: PropTypes.string,
};

export default Nav;