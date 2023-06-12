import React, { useEffect } from 'react';
import MovieListing from '../movieListing/MovieListing';
import "./home.scss";
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/MovieSlice';

const Home = () => {

    const dispatch  = useDispatch();
    const movietext = "harry";
    const seriesText = "friends";
    useEffect(()=>{
            dispatch(fetchAsyncMovies(movietext));
            dispatch(fetchAsyncShows(seriesText));
    },[dispatch]);

    return (
        <div>
            <div className='banner-img'>

            </div>
            <MovieListing/>
        </div>
    );   
};

export default Home;