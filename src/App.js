import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Project from './components/Project'
import Resume from './components/Resume'


function App() {

  return (
    <Router>
      <div className='base'>
        <Header></Header>
        <main className='container my-5'>
          <Switch>
            <Route exact path={"/"}>
              <About></About>
            </Route>
            <Route path={"/project"}>
              <Project></Project>
            </Route>
            <Route path={"/contact"}>
              <Contact></Contact>
            </Route>
            <Route path={"/resume"}>
              <Resume></Resume>
            </Route>
          </Switch>    
        </main>
        <Footer></Footer>
      </div>
    </Router>
  )
}

export default App;
