/* eslint-disable no-console */
import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';

class AppMenu extends React.Component {

  render () {
    if (!this.props.items) {
      return ''
    }

    return (
      <nav className={this.props.className}>
        <ul className={this.props.className + '-items'}>
          {this.props.items.map((item, index) =>
            <li key={index}>
              <NavLink to={ item.path }>{ item.label }</NavLink>
            </li>
          )}
        </ul>
      </nav>
    )
  }

}

export default AppMenu;
