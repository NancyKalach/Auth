import React from "react";
import { Route } from 'react-router-dom';

import Header from './header/header';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import ItemsIndexContainer from './items/items_index_container';
import ItemDetailContainer from './items/item_detail_container';
import ItemsFavoritesContainer from './favorites/items_favorites_container';

import {AuthRoute} from '../util/route_util';

const App = () => (
  <div>
    <Header />

    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />
    <Route exact path = "/items/:category" component={ItemsIndexContainer} />
    <Route exact path = "/items/:itemId" component={ItemDetailContainer} />
    <Route exact path="/favorites" component={ItemsFavoritesContainer} />

  </div>
);

export default App;