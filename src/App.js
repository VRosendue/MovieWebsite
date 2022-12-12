import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';

import LoginModal from './components/Login/LoginModal';
import HomeComponent from './components/Home/Home';
import MovieComponent from "./components/Movies/Movies";
import TvComponent from './components/TVShows/TVShows';
import AnimeComponent from './components/Anime/Anime';



function App() {
  return (
     
  <BrowserRouter>
    <div className="app">
      
      <Navbar />
      
      <Routes>
       
        <Route path='/home' exact element={ <HomeComponent/>} />
        <Route path='/movies' exact element={ <MovieComponent/> } />
        <Route path='/tv-shows' exact element= { <TvComponent/> } />
        <Route path='/anime' exact element = { <AnimeComponent/> } />
        <Route path='/profile' exact element={ <LoginModal/> } />
        
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
