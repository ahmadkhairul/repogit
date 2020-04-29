import React from "react";
import Index from "./pages/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./assets/button.css";
import "./assets/card.css";
import "./assets/grid.css";
import "./assets/form.css";
import "./assets/images.css";

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/">
            <Index />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
