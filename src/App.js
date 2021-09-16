import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LandingPage from './pages/LandingPage';
import NewAccountPage from './pages/NewAccountPage';
import DisqualificationPage from './pages/DisqualificationPage';
import { Provider } from 'react-redux';
import { store } from './redux/configure-store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/disqualification-page">
            <DisqualificationPage />
          </Route>
          <Route path="/new-account">
            <NewAccountPage />
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;