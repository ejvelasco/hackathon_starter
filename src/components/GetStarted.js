import React from 'react';
import { Button, Grid, Cell} from 'react-md';
import { Link } from 'react-router-dom';
import GetStartedToolbar from './GetStartedToolbar';

const coverStyle = {
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-75%)',
  textAlign: 'center',
};
const buttonStyle = {
  lineHeight: '2px',
  borderRadius: '0px',
  boxShadow: 'none',
  marginTop: '20px',
  marginRight: '20px',
  'padding': '20px',
};
const titleStyle = {
  fontSize: '60px',
  color: 'black',
};
const subtitleStyle = {
  fontSize: '22px',
  marginTop: '20px',
  color: 'grey',
};

class GetStarted extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div id="getStarted">
      <GetStartedToolbar></GetStartedToolbar>
        <Grid>
          <Cell style={coverStyle} size={4} offset={4}>
            <h1 style={titleStyle}>Title</h1>
            <h2 style={subtitleStyle}>Subtitle</h2>
             <Link to='/register/advertiser' key={'logIn'}><Button style={buttonStyle} raised primary theme>Advertiser</Button></Link>
             <Link to='/register/influencer' key={'logIn'}><Button style={buttonStyle} raised primary theme>Influencer</Button></Link>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default GetStarted;