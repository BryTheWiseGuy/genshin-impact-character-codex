import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './Components/ScrollToTop.js';
import Navbar from './Components/Navbar.js';
import Home from './Components/Home.js';
import CharacterPage from "./Components/CharacterPage.js";
import CharacterForm from "./Components/CharacterForm.js";
import './stylesheets/App.css';

// The app component contains state and fetch data integral for app functionality,
// as well as routing path for all pages in the web application

function App() {
  const [characters, setCharacters] = useState([])

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/characters`)
            .then(res => res.json())
            .then(characters => {
                setCharacters(characters);
            });
    }, []);

  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={
            <>
              <Navbar characters={characters} />
              <Home characters={characters} />
            </>
          } 
          exact />
          <Route path='/characters/:characterName' element={<CharacterPage characters={characters} />} exact />
          <Route path='/new-character-form' element={
            <>
              <Navbar characters={characters} />
              <CharacterForm characters={characters} setCharacters={setCharacters} />              
            </>
            } 
            exact />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
