import React from 'react'
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import WizardFormFirstPage from "./WizardFormFirstPage";
import WizardFormSecondPage from "./WizardFormSecondPage";
import WizardFormThirdPage from "./WizardFormThirdPage";
import WizardForm from './WizardForm';

const Header = () =>
  (
    <HashRouter>
      <div>
      <ul className="header">
      <li><NavLink to="/home">Home</NavLink></li>
      <li><NavLink to="/stuff">Stuff</NavLink></li>
      <li><NavLink to="/contact">Contact</NavLink></li>
    </ul>
    <div className="content">
      <Route path="/start" component={WizardForm}/>
      <Route path="/home" component={WizardFormFirstPage}/>
      <Route path="/stuff" component={WizardFormSecondPage}/>
      <Route path="/contact" component={WizardFormThirdPage}/>
       
    </div>

 </div>
  </HashRouter>
  );
export default Header