import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './components/NavBar/NavBar';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div>
      <h1>Welcome to My App</h1>
      < NavBar />
      <FontAwesomeIcon icon={faSearch} /> {/* Search icon */}
      <FontAwesomeIcon icon={faCoffee} /> {/* Coffee icon */}
    </div>
  );
}

export default App;
