import React from 'react';
import { Divider, Grid, Segment } from 'semantic-ui-react';

import ResumeLoader from './ResumeLoader';
import Modal from './Modal';

export default props => {

  return (
    <Segment placeholder>
      <Grid columns={2} stackable textAlign='center'>
        <Divider vertical>Or</Divider>
        <Grid.Row verticalAlign='middle'>
          <Grid.Column>
            <ResumeLoader />
          </Grid.Column>
          <Grid.Column>
            <Modal />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  )
}
