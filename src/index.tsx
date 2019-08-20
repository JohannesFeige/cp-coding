import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, NavLink, Redirect } from 'react-router-dom';
import './index.css';
import App from './App';
import Roman from './components/roman/Roman';
import Russian from './components/russian/Russian';
import Ocr from './components/ocr/Ocr';
import NotFound from './components/shared/routes/notfound';

const routes: { path: string; text: string }[] = [
  { path: '/home', text: 'Home' },
  { path: '/roman', text: 'To Roman Numerals' },
  { path: '/russian', text: 'Russian Peasant Multiplication' },
  { path: '/ocr', text: 'BankOCR' },
];

const routing = (
  <BrowserRouter>
    <div className="card">
      <div className="card-header">
        <ul className="nav nav-pills card-header-pills">
          {routes.map(({ path, text }) => (
            <li className="nav-item" key={path}>
              <NavLink className="nav-link" activeClassName="active" to={path}>
                {text}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="card-body container">
        <Switch>
          <Route path="/home" component={App} />
          <Route path="/roman" component={Roman} />
          <Route path="/russian" component={Russian} />
          <Route path="/ocr" component={Ocr} />
          <Redirect from="/" to="/home" />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  </BrowserRouter>
);

ReactDOM.render(routing, document.getElementById('root'));
