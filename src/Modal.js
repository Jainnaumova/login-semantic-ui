import React from 'react';
import { Button, Header, Image, Modal } from 'semantic-ui-react';

export default props => {

  return (
    <Modal trigger={<Button>Show modal</Button>}>
      <Modal.Header>Select Avatar</Modal.Header>
      <Modal.Content image>
        <Image wrapped size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' />
        <Modal.Description>
          <Header>
            Default Profile Image
          </Header>
          <p>We found the following avatar image</p>
          <p>Is it okay to use this photo?</p>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  )
}
