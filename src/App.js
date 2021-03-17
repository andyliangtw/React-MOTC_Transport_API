import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import ROUTES from './routes';
import './App.scss';

export default function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Container>
          <Header />
          {ROUTES.map((route, i) => (
            <Route
              key={i}
              path={route.path}
              exact={route.exact}
              render={(routeProps) => (
                <route.component routes={route.routes} {...routeProps} />
              )}
            />
          ))}
        </Container>
      </Switch>
    </BrowserRouter>
  );
}
