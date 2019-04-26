import React from 'react';
import { Button, Header, Icon, Segment } from 'semantic-ui-react';

export default props => {

  return (
    <Segment inline='true' className='resume-load' placeholder size='tiny' >
      <Header icon>
        <Icon name='pdf file outline' />
        Download you Avatar
      </Header>
      <Button primary>Add Avatar</Button>
    </Segment>
  )
}
