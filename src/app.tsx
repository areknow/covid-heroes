import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import Privacy from './pages/privacy';
import Terms from './pages/terms';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/privacy">
          <Privacy />
        </Route>
        <Route path="/terms">
          <Terms />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
