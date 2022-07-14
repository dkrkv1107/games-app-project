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
  const [order, setOrder] = useState('asc');

  useEffect(() => {
    getData();

  }, [])
  const Inc = () => {
    games.score.sort((a, b) =>
      a.score - b.score``
    );
  }
  return (
    <div className="App">
      <div className='main'>
        <header className='header'>Games Store</header>
        <form className='main'>
          <div className='main-search'>
            <input type='text' placeholder='Search by Name or Platform' onChange={(e) => setSearch(e.target.value)} />


            <div className="dropdown">
              <button className="dropbtn">Sort</button>
              <div className="dropdown-content">
                <a href="#" onClick={Inc}>Asc</a>
                <a href="#">Desc</a>

              </div>
            </div>
          </div>


        </form>
        <div className='main-content'>
          {games.slice(1).filter((val) => {
            if (search === '') {
              return val;
            } else if (val.title.toLowerCase().includes(search.toLowerCase())) {
              return val;
            } else if (val.platform.toLowerCase().includes(search.toLowerCase())) {
              return val;
            }
          }).map((gamer, index) => {
            return <div key={index}>
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
