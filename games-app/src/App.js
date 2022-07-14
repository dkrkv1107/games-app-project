import Axios from 'axios';
import './App.css';
import React, { useState, useEffect } from 'react';


function App() {
  var url = `https://s3-ap-southeast-1.amazonaws.com/he-public-data/gamesarena274f2bf.json`;
  async function getData() {
    var result = await Axios.get(url);
    setGames(result.data);

  }
  const [search, setSearch] = useState('');
  const [games, setGames] = useState([]);

  useEffect(() => {
    getData();

  }, [])
  return (
    <div className="App">
      <div className='main'>
        <header className='header'>Games Store</header>
        <form className='main'>
          <div className='main-search'>
            <input type='text' placeholder='Search...' onChange={(e) => setSearch(e.target.value)} />
            <input type='submit' value='Search' />
          </div>


        </form>
        <div className='main-content'>
          {games.map((gamer, index) => {
            return <div>
              <h3>Title: {gamer.title}</h3>
              <h3>Platform: {gamer.platform}</h3>
              <h3>Score: {gamer.score}</h3>
              <h3>Genre: {gamer.genre}</h3>
              <h3>Editor's Choice: {gamer.editors_choice}</h3>
            </div>
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
