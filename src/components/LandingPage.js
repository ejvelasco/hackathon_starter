import React from 'react';
import LandingPageToolBar from './LandingPageToolBar';
import Cover from './Cover';
import Advertisers from './Advertisers';
import Creators from './Creators';

const landingPageStyle = {
  height: '100%',
};

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="landingPage" style={landingPageStyle}>
        <LandingPageToolBar />
        <Cover />
        <Advertisers />
        <Creators />
      </div>
    );
  }
}

export default LandingPage;