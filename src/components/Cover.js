import React from 'react';
import { Grid, Media, Cell, Button } from 'react-md';

const coverStyle = {
  height: '100%',
};
const coverContentStyle = {
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  width: '100%',
};
const buttonStyle = {
  padding: '25px',
  marginRight: '10px',
  lineHeight: '2px',
  borderRadius: '0px',
  boxShadow: 'none',
  marginTop: '20px',
};
const coverTextStyle = {
  padding: '50px',
  paddingTop: '120px',
  paddingLeft: '80px',
  fontFamily: 'Raleway, sans-serif',
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
class Cover extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="cover" style={coverStyle}>
        <Grid style={coverContentStyle}>
          <Cell size={6}>
            <Media
              children={[
                <img key={'image'} src="http://via.placeholder.com/350x150"></img>
              ]}
            >
            </Media>
          </Cell>
          <Cell style={coverTextStyle} size={6}>
            <h1 style={titleStyle}>Title</h1>
            <h2 style={subtitleStyle}>Subtitle</h2>
            <Button style={buttonStyle} raised primary theme>Get Started</Button>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Cover;