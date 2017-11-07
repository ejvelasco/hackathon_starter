import React from 'react';
import { Toolbar, Button, FontIcon } from 'react-md';
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
  width: '32px', 
  float: 'left',
  margin: '10px',
  marginRight: '5px',
};
const brandStyle = {
  margin: '10px',
  fontFamily: 'Raleway, sans-serif',
  fontSize: '25px',
  fontWeight: 700,
  color: '#42a5f5',
}
const toolBarItems = {
  title: 'Logo',
  navItems : [{
    key: 'inbox',
    primaryText: 'Inbox',
    leftIcon: <FontIcon>inbox</FontIcon>,
    active: true,
  }],
  children: [
    <Button style={toolBarButtonStyle} key={'logIn'} flat>Log In</Button>,
    <Button style={toolBarButtonStyle} key={'getStarted'} raised primary theme>Get Started</Button>
  ],
};

class LandingPageToolBar extends React.Component {
  render() {
    return (
      <Toolbar
        id="main-toolbar"
        title={<div><img style={smallLogoStyle} src={logoPath}></img><h1 style={brandStyle}>Name</h1></div>}
        actions={toolBarItems.children}
        style={toolBarStyle}
      >
      </Toolbar>
    );
  }
}

export default LandingPageToolBar;