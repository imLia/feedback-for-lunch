import React, { Component } from 'react';

export default class MainHeader extends Component {
  render() {
    return (
    <section>
      <h1 >MEAL OF THE DAY</h1>
      <h4>July 1, 2015</h4>
      <section className="ul-images">
        <ul>
          <li> <a href="#">  <img src="images/emoji-superb.png" alt="superb" /> </a> </li>
          <li> <a href="#"> <img src="images/emoji-great.png" alt="great" />	</a> </li>
          <li> <a href="#"> <img src="images/emoji-not-bad.png" alt="not bad" /> </a> </li>
          <li> <a href="#"> <img src="images/emoji-disappointed.png" alt="yuck" />	</a> </li>
        </ul>
      </section>
      <img src="images/meal.png" alt="Meal" className="meal"/>
      <h5>Whats on the meal?</h5>
      <section className="navigatemymeal">
          <ul>
            <li>Buffalo Wings with Rice</li>
            <li>Mango Graham</li>
            <li>Mango Balls</li>
          </ul>
      </section>
    </section>
    );
  }
}
