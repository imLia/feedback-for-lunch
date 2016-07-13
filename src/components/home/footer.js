import React, { Component } from 'react';
import {Link} from 'react-router';


export default class MainHeader extends Component {
  render() {
    return (
      <footer>
        <h2>FOLLOW US</h2>
        <ul>
          <li><a href="#" className="facebook-logo">Facebook</a></li>
          <li><a href="#" className="twitter-logo">Twitter</a></li>
          <li><a href="#" className="google-plus-logo">Google plus</a></li>
          <li><a href="#" className="linkedin-logo">LinkedIn</a></li>
          <li><a href="#" className="youtube-logo">Youtube</a></li>
        </ul>
        <span>&copy;aCommercePH Hub Team | ALL RIGHTS RESERVED</span>
      </footer>
    );
  }
}
