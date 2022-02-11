import React, {useState} from 'react';
import './App.css';
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'

// import Project from './components/Project'


function App() {

  const [page] = useState([
    {name: 'about'}, 
    {name:'projects'}, 
    {name:'contact'}, 
    {name:'resume'}
  ]);

  const [currentPage, setCurrentPage] = useState(page[0]);
console.log(page)
  return (
  <div>
     <Header>
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
    </Header>

    <main>
    {/* {currentPage === 'about' ( */}
        <About></About>
    {/* )} */}
    {/* {currentPage === page[2] (
      <Contact></Contact>
    )} */}
    </main>

    <Footer></Footer>
  </div>
  )
}

export default App;
