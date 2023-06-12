import React from 'react';
import { useSelector } from 'react-redux';
import { getAllMovies, getAllShows, getLoading } from '../../features/movies/MovieSlice';
import MovieCard from '../movieCard/MovieCard';
import Loader from '../Loading/Loader';
import Slider from 'react-slick';
import { settings } from '../../comman/settings';
import "./MovieListing.scss";

const MovieListing = () => {
    const movies = useSelector(getAllMovies);
    const shows = useSelector(getAllShows);
    const loading = useSelector(getLoading);
    let renderMovies ="";
    let renderShows = "";
    renderMovies = 
        movies.Response === "True" ? (
            movies.Search.map((movie, index) =>{
            return <MovieCard key={index} data={movie}/>;
        })
        ):(
        <div className="movie-error"><h3>{movies.Error}</h3></div>
        );

    renderShows=
            shows.Response === "True" ? (
                shows.Search.map((shows, index)=>{
                    return <MovieCard key = {index} data = {shows}/>;
                })
            ):(
              <div className='"movie-error'><h3>{shows.Error}</h3></div>  
            );

    return (
        
        <>
        {loading === 0?(
            <div className='loader'>
                <Loader/>
            </div>
            
            ):(
                <div className='movie-wrapper'>
                    <div className='movie-list'>
                        <h2>Movies</h2>
                        <div className='movie-container'>
                        <Slider {...settings}>{renderMovies}</Slider>
                        </div>
                    </div>
                    <div className='show-list'>
                        <h2>Shows</h2>
                        <div className='movie-container'>
                            <Slider {...settings}>{renderShows}</Slider>
                        </div>
                    </div>
                </div>
            )}
        
        </>
        
    );
};

export default MovieListing;