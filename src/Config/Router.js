import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from '../Component/login'
import Home from '../Component/home'
import Company from "../Component/company";
import CompanyForm from "../Component/companyForm";

export default function App() {
    return (
        <Router>
          <div>
            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/" exact>
                <Login />
              </Route>
              <Route path="/home">
                <Home />
              </Route>
              <Route path= "/company">
                <Company />
              </Route>
              <Route path= "/companyForm">
                <CompanyForm />
              </Route>
            </Switch>
          </div>
        </Router>
      );
    }
