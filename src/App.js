import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';

import LoginModal from './components/Login/LoginModal';
import HomeComponent from './components/Home/Home';
import MovieComponent from "./components/Movies/Movies";
import TvComponent from './components/TVShows/TVShows';
import AnimeComponent from './components/Anime/Anime';
import SearchBar from './components/Search/Test';
import './App.css'



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      darkenBackground: false
    };
  }

  handleOpenModal = () => {
    this.setState({ showModal: true, darkenBackground: true});
  }

  handleCloseModal = () => {
    this.setState({ showModal: false, darkenBackground: false});
  }
  render() {
    const {darkenBackground} = this.state;
    let className = 'app-container';
    if(darkenBackground) {
      className += 'darken-background';
    
  }
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
        <Route path='/searchbar' exact element={ <SearchBar/> } />
        
      </Routes>
    </div>
  </BrowserRouter>
  );
}
}

export default App;
