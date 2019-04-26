import React from 'react';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default props => {

  return (
    <Grid centered columns={2}>
      <Grid.Column>
        <Header as='h2'>
          Login
        </Header>
        <Segment>
          <Form size="large">
            <Form.Field>
              <Form.Input
                label='Email address'
                fluid
                icon="user"
                iconPosition="left"
                placeholder="Email address"
              />
            </Form.Field>
            <Form.Field>
              <Form.Input
                label='Password'
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
              />
            </Form.Field>
            <Button color="blue" fluid size="large">
              Login
            </Button>
          </Form>
        </Segment>
        <Message>
          Not Register yet? <Link to='/sign'>Sign up</Link>
        </Message>
      </Grid.Column>
    </Grid>
  )
}
