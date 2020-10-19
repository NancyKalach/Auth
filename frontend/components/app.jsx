import React from "react";
import { Route } from 'react-router-dom';

import Header from './header/header';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import Shop from './shop/shop';

import {AuthRoute} from '../util/route_util';

const App = () => (
  <div>
    <Header />
    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />
    <Route exact path="/shop" component={Shop} />
  </div>
);

export default App;