import React from 'react';
import routes from '../routes';
import { Link } from 'react-router-dom';

const Layout = (props) => (
  <div>
    <h1>Menu</h1>
      <ul>
    {routes(true)
      .filter(r => r.showInMenu)
      .map(r => (
        <li key={r.label} >
                <Link to={r.path}> {r.iconClass ?
                    <i className={r.iconClass} ></i>: null } {r.label} </Link>
              </li>)
      )}
      </ul>
    <hr />
    {props.children}
  </div>
);

export default Layout;