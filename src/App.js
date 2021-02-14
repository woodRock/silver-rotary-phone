import Runs from "./pages/Runs";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "./api/auth.js";

const App = () => <Pages />;

const Pages = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Runs} />
    </Switch>
  </Router>
);

export default App;
