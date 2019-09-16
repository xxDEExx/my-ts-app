import React, { SFC } from 'react';
import { Route } from 'react-router-dom';

// Containers
import Dashboard from 'containers/dashboard';
import AboutUs from 'containers/aboutus';

const RouteComponent: SFC = () => (
  <React.Fragment>
    <Route exact path="/" component={Dashboard} />
    <Route exact path="/about-us" component={AboutUs} />
  </React.Fragment>
)

export default RouteComponent
