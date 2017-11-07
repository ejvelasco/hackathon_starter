import React from 'react';
import { Grid, Media, Cell } from 'react-md';

const coverStyle = {
  height: '100%',
};
const coverContentStyle = {
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  width: '100%',
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
                <img src="http://via.placeholder.com/350x150"></img>
              ]}
            >
            </Media>
          </Cell>
          <Cell size={6}>
            <p>Hello</p>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Cover;