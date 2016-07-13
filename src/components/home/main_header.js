import React, { Component } from 'react';
import {Link} from 'react-router';

export default class MainHeader extends Component {
  render() {
    return (
      <header>
        <h1><a href="#" className="logo">Rate my Meal</a></h1>
        <nav>
          <ul>
            <li><a href="#" >TODAYS FOOD</a></li>
            <li ><a href="#">UPLOAD</a></li>
            <li><a href="#">ABOUT</a></li>
          </ul>
        </nav>
      </header>
    );
  }
}
