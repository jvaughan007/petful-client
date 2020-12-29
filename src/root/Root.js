import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import AboutPage from '../pages/About';
import AdoptionPage from '../pages/AdoptionPage';
import Confirmed from '../pages/Confirmed';
import PeopleQueue from '../pages/PeopleQueue';


function Root() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={'/'} component={AboutPage} />
        <Route exact path={'/adopt'} component={AdoptionPage} />
        <Route exact path={'/queue'} component={PeopleQueue} />
        <Route exact path={'/adopted'} component={Confirmed} />
      </Switch>
  </BrowserRouter>
  );
}

export default Root
