import React from 'react';


export default class Project extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <React.Fragment>
        <section className='projects container'>
          <h1>PROJECTS</h1>
          <aside>
            <h3>CS4Iowa</h3>
            <a href='https://cashmann.github.io/CS4Iowa/'>https://cashmann.github.io/CS4Iowa/</a>
            <p>This was the first large scale project I worked on as a full-stack developer. This website displays details on the availability of 
              computer science education in public schools for the state of Iowa. The current product was developed within four days.
            </p>
            <ul>My responsibilities on this project included:
              <li>Delegating responsibilities.</li>
              <li>Figuring out how best to display the data.</li>
              <li>Developing functions for the filtering and storage of data.</li>
              <li>Debugging the final code.</li>
            </ul>
          </aside>
          <aside>
            <h3>415 FaceWall</h3>
            <a href='https://facewall-415.herokuapp.com'>https://facewall-415.herokuapp.com</a>
            <p>This project, the 415 FaceWall, was created with the intent that employees with the Geonetric 415 building could view details about other
              employees working in the same building, allowing for easier ways for employees to break the ice and get to know one another. The design was 
              made to mimic the look of the real-world wall that displayed the pictures of every employee and what company they worked for.
            </p>
          </aside>
        </section>
      </React.Fragment>
    )
  }
}