import React from 'react';
import { Card, GridList, Media,Grid, Cell} from 'react-md';
import images from '../images';

class Creators extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Grid id="creators">
        <Cell size={6}>
          <p>Hello</p>
        </Cell>
        <Cell size={6}>
          <GridList component="section">
            {images.map(({ url, key }) => (
              <Card key={key}>
                <Media>
                  <img src={url} alt="Something" />
                </Media>
              </Card>
            ))}
          </GridList>
        </Cell>
      </Grid>
    );
  }
}

export default Creators;