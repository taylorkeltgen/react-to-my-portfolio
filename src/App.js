import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './components/About';
// import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Project from './components/Project';
import Resume from './components/Resume';

function App() {
  return (
    <Router basename="react-to-my-portfolio/">
      <div className="base">
        <Header></Header>
        <main className="container my-5">
          <Switch>
            <Route exact path={'/'} component={About} />
            <Route path={'/project'} component={Project} />
            {/* <Route path={"/contact"} component={Contact} /> */}
            <Route path={'/resume'} component={Resume} />
          </Switch>
        </main>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
