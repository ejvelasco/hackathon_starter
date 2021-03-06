import React from 'react';
import { Button, Cell, Grid, Divider, FontIcon, TextField, SVGIcon, SelectField } from 'react-md';
import axios from 'axios';
import GetStartedToolbar from './GetStartedToolbar';

const STRING_ITEMS = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten'];
const sectionStyle = {
  padding: '30px',
  paddingTop: '0px',
};
const gridStyle = {
  position: 'relative', 
  top: '50px',
  width: '100%',
}
const toolBarButtonStyle = {
  padding: '20px',
  marginRight: '10px',
  lineHeight: '2px',
  borderRadius: '0px',
  boxShadow: 'none',
  display: 'block',
  margin: '0 auto',
  marginTop: '20px',
};

class RegisterAdvertiser extends React.Component {
  constructor(props){
    super(props);
  }
  register() {
    axios.post('/api/register', {})
     .then((res) => {
       console.log(res.data);
       // newState.user = user;
       // this.setState(newState);
     });
  }
  render() {
    return (
      <div>
      <GetStartedToolbar />
        <Grid style={gridStyle}>
          <Cell size={4} offset={4}>
            <section style={sectionStyle} className="dividers__example md-paper md-paper--3">
              <TextField
                label="First Name"
                type="text"
                leftIcon={<FontIcon>person</FontIcon>}
              />
              <TextField
                label="Last Name"
                type="text"
                leftIcon={<FontIcon>person</FontIcon>}
              />
              <TextField
                label="Email"
                type="email"
                leftIcon={<FontIcon>email</FontIcon>}
              />
              <TextField
                label="Company Name"
                type="text"
                leftIcon={<FontIcon>card_travel</FontIcon>}
              />
              <TextField
                label="Job Title"
                type="text"
                leftIcon={<FontIcon>card_travel</FontIcon>}
              />
              <TextField
                label="Industry"
                type="text"
                leftIcon={<FontIcon>language</FontIcon>}
              />
              <TextField
                label="Username"
                type="text"
                leftIcon={<FontIcon>person_pin</FontIcon>}
              />
              <TextField
                label="Password"
                type="password"
                leftIcon={<FontIcon>lock</FontIcon>}
                passwordIcon={<FontIcon>remove_red_eye</FontIcon>}
              />
              <TextField
                label="Confirm Password"
                type="password"
                leftIcon={<FontIcon>lock</FontIcon>}
                passwordIcon={<FontIcon>remove_red_eye</FontIcon>}
              />
              <Button style={toolBarButtonStyle}  onClick={this.register.bind(this)} raised primary theme>Create Account</Button>
            </section>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default RegisterAdvertiser;