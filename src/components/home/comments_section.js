import React, { Component } from 'react';


export default class CommentsSection extends Component {
  render() {
    return (
      <div className="commentscontainer">
        <div className="comments-form">
          <h3>COMMENTS & SUGGESTIONS</h3>
          <div>
            <label></label>
            <input className="label" type="text" name="name" placeholder="Your Name: (Optional)" />
          </div>
          <div>
            <label></label>
            <textarea className ="textarea" name="suggestions" rows="8" cols="40" placeholder="Type your suggestions/comments here..."></textarea>
		      </div>
		      <button  className="button">SUBMIT</button>
        </div>
        <div className="feedback-container">
          <section className="feedback-container-inner" >
            <h2> FEEDBACK </h2>
            <label> The food is incredibly "awesome" </label>
            <label> I hope there be some extra veggies </label>
            <label> No more oily foods please?</label>
            <footer>
              <p> All post are visible </p>
            </footer>
          </section>
		      <section className="numberofratings" >
      		 <h2>RATINGS </h2>
            <table>
      				<tr>
      					<th> Superb </th>
      					<th> Great </th>
      					<th> Okay </th>
      					<th> Disappointed </th>
      				</tr>
      				<tr>
      					<th>5 </th>
      					<th>5 </th>
      					<th>5 </th>
      					<th>5 </th>
              </tr>
    			  </table>
    	    </section>
        </div>
      </div>
    );
  }
}
