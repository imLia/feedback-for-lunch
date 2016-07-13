import React, { Component } from 'react';

import MainHeader from './home/main_header';
import MealDetailsSection from './home/meal_details_section';
import CommentsSection from './home/comments_section';
import Footer from './home/footer';

import './test.scss';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="container-header">
          <MainHeader />
        </div>
        <div className="container-content">
          <MealDetailsSection />
        </div>
        <div className="container-comments">
          <CommentsSection />
        </div>
        <div className="container-footer">
          <Footer />
        </div>
      </div>
    );
  }
}
