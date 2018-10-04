import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';

export default class Intro extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <React.Fragment>
        <section className='intro container'>
          <Link to='/about'><h1>Nathan Cashman</h1>  <h2>Eclectic, Innovative, Leader</h2> </Link>
        </section>
      </React.Fragment>
    )
  }
}