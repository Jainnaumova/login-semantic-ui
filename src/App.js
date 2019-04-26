import React from 'react';
import { Container } from 'semantic-ui-react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Login from './Login';
import SignUp from './SignUp';

export default props => {

  return (
    <Container>
      <HashRouter>
        <Switch>
          <Route exact path='/' component={ Login } />
          <Route exact path='/sign' component={ SignUp } />
        </Switch>
    </HashRouter>
    </Container>
  )
}
