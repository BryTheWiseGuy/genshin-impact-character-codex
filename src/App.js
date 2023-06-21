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
        <Navbar characters={characters} onSetCurrentCharacter={setCurrentCharacter}/>
        <Routes>
          <Route path='/' element={<Home characters={characters} />} exact />
          <Route path='/characters/:characterName' element={<CharacterPage character={currentCharacter} />} exact />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
