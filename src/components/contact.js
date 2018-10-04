import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';

export default class Contact extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <React.Fragment>
        <section className='contact container'>
          <h1>Nathan Cashman</h1>
          <h2>Full-Stack Javascript Developer</h2>
          <ul>
            <li><a href='mailto:ncash13@hotmail.com?subject=Greetings!'>Email</a></li>
            <li><a href='github.com/cashmann'>Github</a></li>
            <li><a href='https://www.linkedin.com/in/nathancashman/'>LinkedIn</a></li>
          </ul>
        </section>
      </React.Fragment>
    )
  }
}