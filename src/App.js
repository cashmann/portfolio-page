import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Intro from './components/intro';
import About from './components/about';
import Project from './components/project';
import Contact from './components/contact';
import './mobile-first.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      show: false,
    }
  }
  clickHanler = (e) =>{
    this.setState({
      show: !this.state.show,
    })
  }

  render() {
    const showClassname = this.state.show !== false ? 'show' : null;
    return (
      <BrowserRouter>
        <div className="App">
          <header>
            <h1>
              <Link to='/'>Nathan Cashman</Link>
            </h1>
            <nav>
              <div className='hamburger' onClick={this.clickHanler}>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <ul className={showClassname}>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/projects'>Projects</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
              </ul>
            </nav>
          </header>
          <main>
            <Route exact path='/'
              component={Intro} />
            <Route exact path='/about'
              component={About} />
            <Route exact path='/projects'
              component={Project} />
            <Route exact path='/contact'
              component={Contact} />
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
