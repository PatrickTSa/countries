import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CountryScreen from '~/scenes/countries';
import DetailScreen from '~/scenes/countries/details';

const Routes: React.FC = () => (
  <Router>
    <Switch>
      <Route path="/detail/:countryId">
        <DetailScreen />
      </Route>
      <Route path="/">
        <CountryScreen />
      </Route>
    </Switch>
  </Router>
);

export default Routes;
