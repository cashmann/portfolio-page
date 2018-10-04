import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';

export default class About extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <React.Fragment>
        <section className='about container'>
          <section><h1>Hello World!</h1><div>My name is Nathan Cashman and I’m a software developer transitioning into the field 
            from a career as music educator. I graduated from Drake University with a degree in music 
            education and spent about a year working in the field. During this period 
            I started to teach myself to code in Python. I quickly fell in love with the analytical aspects 
            of coding which resembled my favorite musical practice of analyzing the stucture, whether it be theoretical, 
            affective, etc. From there, my next path forward was clear.</div> </section>
            <aside><h3>Interests</h3>
              <ul>
                <li>Music</li>
                <li>Gaming</li>
                <li>Art</li>
                <li>Anime</li>
              </ul>
            </aside>
            <aside><h3>Strengths</h3>
              <ul>
                <li>Strong Work Ethic</li>
                <li>Fast Learner</li>
                <li>Competitive</li>
                <li>Creative</li>
              </ul>
            </aside>
        </section>
      </React.Fragment>
    )
  }
}