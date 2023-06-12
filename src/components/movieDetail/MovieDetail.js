import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { fetchAsyncMoviesOrShowsDetail, getAllMoviesOrShowDetail, removeMovieOrShowDetail } from '../../features/movies/MovieSlice';
import Loader from '../Loading/Loader';
import "./MovieDetail.scss";

const MovieDetail = () => {
    const {imbdID}  = useParams();
    const dispatch = useDispatch();
    const data = useSelector(getAllMoviesOrShowDetail);
    useEffect(() => {
      dispatch(fetchAsyncMoviesOrShowsDetail(imbdID));
      return () =>{
        dispatch(removeMovieOrShowDetail());
      }
    }, [dispatch, imbdID]);
    return (
        <div className='movie-section'>
            {Object.keys(data).length===0?
            (
                <Loader/>
            ):(
                <>
                <div className='section-left'>
                    <div className='movie-title'>
                        {data.Title}
                    </div>
                    <div className='movie-rating'>
                        <span>
                            IMDB Rating <i className="fa-solid fa-star"></i> : {data.imdbRating}
                        </span>
                        <span>
                            IMDB Votes <i className="fa-solid fa-thumbs-up"></i> : {data.imdbVotes}
                        </span>
                        <span>
                            Runtime <i className="fa-solid fa-film"></i> : {data.Runtime}
                        </span>
                        <span>
                            Year <i className="fa-solid fa-calendar"></i> : {data.Year}
                        </span>
                    </div>
                    <div className='movie-plot'>
                        {data.Plot}
                    </div>
                    <div className='movie-info'>
                        <div>
                            <span>Director:</span>
                            <span>{data.Director}</span>
                        </div>
                        <div>
                            <span>Stars:</span>
                            <span>{data.Actors}</span>
                        </div>
                        <div>
                            <span>Genres:</span>
                            <span>{data.Genre}</span>
                        </div>
                        <div>
                            <span>Languages:</span>
                            <span>{data.Language}</span>
                        </div>
                        <div>
                            <span>Awards</span>
                            <span>{data.Awards}</span>
                        </div>
                    </div>
                </div>
                <div className='section-right'>
                    <img src={data.Poster} alt={data.Title}/>
                </div>
                </> 
            )}
        </div>
    );
};

export default MovieDetail;