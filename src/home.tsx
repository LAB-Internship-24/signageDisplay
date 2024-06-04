import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Message from './timer';
import { DateTime } from './currentTime';
import './App.css';
import RoomReservation from './roomReservation';

function Home() {
  const [isRed, setIsRed] = useState(false);

  const handleCircleClick = () => {
    setIsRed(!isRed);
  };

  return (
    <Router>
      <div className='app-container'>
        <div className='top-left'>{DateTime()}</div>
        <div className="top-center">Parkkikiekko</div>
        <div className="top-right">Päivän aikataulu</div>
        <div className={`center-timer ${isRed ? 'red' : ''}`} 
          onClick={handleCircleClick}
        >
          {isRed ? 'Varattu' : 'Vapaa'}
        </div>
        <div className="bottom-left">Seuraava aika: N/A</div>
        <div className="bottom-right">
          <Link to="/roomReservation">Varaa aika</Link>
        </div>
      </div>

      <Routes>
        <Route path="/roomReservation" Component={RoomReservation} />
      </Routes>
    </Router>
  );
}

export default Home;
