import React from 'react';
import { Toolbar, Button, FontIcon } from 'react-md';
import { Link } from 'react-router-dom';
import Nav from './Nav';

const logoPath = 'logo_blue.png';
const toolBarStyle = {
  color: 'white',
  padding: '10px',
  paddingRight: '20px',
};
const toolBarButtonStyle = {
  padding: '20px',
  marginRight: '10px',
  lineHeight: '2px',
  borderRadius: '0px',
  boxShadow: 'none',
};
const smallLogoStyle = {
  height: '40px', 
  width: '40px', 
  float: 'left',
  margin: '12px',
  marginRight: '5px',
};
const brandStyle = {
  margin: '10px',
  fontFamily: 'Raleway, sans-serif',
  fontSize: '25px',
  fontWeight: 700,
  color: '#42a5f5',
};
const toolBarItems = {
  navItems : [{
    key: 'inbox',
    primaryText: 'Inbox',
    leftIcon: <FontIcon>inbox</FontIcon>,
    active: true,
  }],
  children: [
    <Link to='/login' key={'logIn'}><Button style={toolBarButtonStyle} flat>Log In</Button></Link>,
    <Link to='/start' key={'getStarted'}><Button style={toolBarButtonStyle}  raised primary theme>Get Started</Button></Link>,
  ],
};

class LandingPageToolBar extends React.Component {
  render() {
    return (
      <Toolbar
        id="main-toolbar"
        title={ <Link to={'/'}><img style={smallLogoStyle} src={logoPath}></img><h1 style={brandStyle}>PairUp</h1></Link>}
        actions={toolBarItems.children}
        style={toolBarStyle}
      >
      </Toolbar>
    );
  }
}

export default LandingPageToolBar;