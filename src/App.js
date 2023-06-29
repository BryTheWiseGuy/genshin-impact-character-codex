import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar.js';
import Home from './Components/Home.js';
import CharacterPage from "./Components/CharacterPage.js";
import './stylesheets/App.css';

function App() {
  const [characters, setCharacters] = useState([])
  const [currentCharacter, setCurrentCharacter] = useState({})

    useEffect(() => {
        fetch("http://localhost:3000/characters")
            .then(res => res.json())
            .then(characters => {
                setCharacters(characters);
            });
    },
        []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={
            <>
              <Navbar characters={characters} onSetCurrentCharacter={setCurrentCharacter} />
              <Home characters={characters} />
            </>
          } 
          exact />
          <Route path='/characters/:name' element={<CharacterPage characters={characters} setCurrentCharacter={setCurrentCharacter} />} exact />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
