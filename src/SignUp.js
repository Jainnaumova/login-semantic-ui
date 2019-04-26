import React, { Component } from 'react';
import { Grid, Form, Button, Checkbox, Input, Radio, Select, TextArea } from 'semantic-ui-react';
import Avatar from './Avatar';

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' }
]

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e, { value }) => {
    this.setState({ value })
  }

  render() {

    return (
      <Grid centered column='2'>
        <Form unstackable>
          <Form.Group widths='equal'>
            <Form.Field control={Input} label='First Name' placeholder='First Name' />
            <Form.Field control={Input} label='Last Name' placeholder='Last Name' />
            <Form.Field control={Select} label='Gender' options={options} placeholder='First Name' />
          </Form.Group>
          <Form.Group inline>
            <label>Child</label>
            <Form.Field control={Radio} label='Yes' value='1'  checked={this.state.value === '1'} name='child' onChange={this.handleChange}/>
            <Form.Field control={Radio} label='No' value='0' checked={this.state.value === '0'} name='child' onChange={this.handleChange}/>
          </Form.Group>
          <Form.Group inline>
            <label>Education</label>
            <Form.Field control={Checkbox} label='High School' />
            <Form.Field control={Checkbox} label='Associate' />
            <Form.Field control={Checkbox} label='Bachelor Degree' />
            <Form.Field control={Checkbox} label='Master Degree' />
            <Form.Field />
          </Form.Group>
          <Form.Group inline>
            <label>About</label>
            <Form.Field width={16} control={TextArea} placeholder='Tell us more about you... ' />
          </Form.Group>
          <Avatar />
          <Form.Field control={Checkbox} label='I agree to the Terms and Conditions' />
          <Form.Field control={Button}>Submit</Form.Field>
        </Form>
      </Grid>
    )
  }
}
