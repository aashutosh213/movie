import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/MovieSlice';
import user from '../../images/user.png';
import './header.scss'

const Header = () => {
    const [term, setterm]= useState("");
    const dispatch = useDispatch();
    const submitHandler = (event) => {
        event.preventDefault();
        if(term ==="")return alert("Please enter search term");
        if(term.length<3)return alert("Please enter a longer keyword");
        dispatch(fetchAsyncMovies(term));
        dispatch(fetchAsyncShows(term)); 
        setterm("");
    }
    return (
        <div className='header'>
            <div className='logo'>
                <Link to="/">
                    Movie App
                </Link>
            </div>
            <div className='search-bar'>
                <form onSubmit={submitHandler}>
                    <input type="text" value={term} placeholder='Search Movies Or Shows' onChange={(event)=>setterm(event.target.value)}/> 
                    <button type='submit'><i className="fa fa-search"></i></button>
                </form>
            </div>
            <div className='user-img'>
                <img src={user} alt='user'/>
            </div>
        </div>
    );
};

export default Header;