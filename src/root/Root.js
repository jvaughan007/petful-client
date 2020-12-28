import React from 'react'
// import { Switch, Route, Link } from 'react-router-dom';
import AboutPage from '../pages/About';
// import AdoptionPage from '../pages/AdoptionPage/AdoptionPage';


function Root() {
  return (
  <div className="container">
    <AboutPage />
  

  {/* <Switch>
    <Route exact path={"/adopt"} component={AdoptionPage} />
  </Switch> */}
  </div>
  );
}

export default Root
