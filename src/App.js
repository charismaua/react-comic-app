import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Navigation from './components/Navigation/Navigation';
import DisplayComic from "./components/Comic/DisplayComic";
import TheLatestComic from './components/Comic/TheLatestComic';

function App() {
  return (
    <Router data-testid="App">
      <div className="app">
        <Switch>
          <Route path="/find-comic">
            <Navigation>
              <Link to="/">Back to the Main Page</Link>
            </Navigation>
            <DisplayComic />
          </Route>
          <Route path="/">
            <Navigation>
              <Link to="/find-comic">Find a Specific Comic...</Link>
            </Navigation>
            <TheLatestComic />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
