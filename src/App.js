import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import ROUTES from './routes';
import './App.scss';

function App() {
  return (
    <Router>
      <Switch>
        <Container>
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
    </Router>
  );
}

export default App;
