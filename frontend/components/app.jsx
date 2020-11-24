import React from "react";
import { Route } from 'react-router-dom';

import HeaderContainer from './header/header_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import ItemsIndexContainer from './items/items_index_container';
import ItemDetailContainer from './items/item_detail_container';
import FavoritesContainer from './favorites/favorites_container';
import CartContainer from './cart/cart_container';
import Home from './home/home';
import HomeNav from './home/home_nav';
import Contact from './contact/contact';

import {AuthRoute} from '../util/route_util';

const App = () => (
  <div>
    <HeaderContainer />
    <HomeNav />

    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />
    <Route exact path = "/category/:category" component={ItemsIndexContainer} />
    <Route exact path = "/items/:itemId" component={ItemDetailContainer} />
    <Route exact path="/userfavorites" component={FavoritesContainer} />
    <Route exact path="/cart" component={CartContainer} />
    <Route exact path="/" component={Home} />
    <Route exat path ="/contact" component={Contact} />

  </div>
);

export default App;