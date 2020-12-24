import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import Privacy from './pages/privacy';
import Terms from './pages/terms';

const routes = [
  { path: '/privacy', component: Privacy },
  { path: '/terms', component: Terms },
  { path: '/', component: Home }
];

const App = () => {
  return (
    <Router>
      <Switch>
        {routes.map((route, index) => (
          <Route key={index} path={route.path}>
            {route.component}
          </Route>
        ))}
      </Switch>
    </Router>
  );
};

export default App;
