import './App.scss';
import React from 'react';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home';
import PageNotFound from './components/pageNotFound/PageNotFound';
import MovieDetail from './components/movieDetail/MovieDetail'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="app">
      <Router>
        <Header></Header>
        <div className='Container'>
          <Routes>
            <Route path='/' exact element={<Home />}/>
            <Route path='/movie/:imbdID' element={<MovieDetail/>} />
            <Route element={<PageNotFound/>}/>
          </Routes>
        </div>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
