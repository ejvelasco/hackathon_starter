import React from 'react';
import { Toolbar, Button, FontIcon } from 'react-md';


const toolBarItems = {
  title: 'Logo',
  navItems : [{
    key: 'inbox',
    primaryText: 'Inbox',
    leftIcon: <FontIcon>inbox</FontIcon>,
    active: true,
  }],
  children: [
    <Button key={'logIn'} flat>Log In</Button>,
    <Button key={'getStarted'} raised primary theme>Get Started</Button>
  ],
};
const toolBarStyle = {
  color: 'white',
};

class LandingPageToolBar extends React.Component {
  render() {
    return (
      <Toolbar
        id="main-toolbar"
        title={toolBarItems.title}
        actions={toolBarItems.children}
        style={toolBarStyle}
      >
      </Toolbar>
    );
  }
}

export default LandingPageToolBar;