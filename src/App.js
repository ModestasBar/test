import React from 'react';
import Header from './Header';
import Gifs from './Gifs';
import './App.scss';

function App() {
  return (
    <div className="app" data-testid="app">
      <Header />
      <Gifs />
    </div>
  );
}

export default App;
