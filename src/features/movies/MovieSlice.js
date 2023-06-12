import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../comman/apis/movieApi";
import {APIKey} from "../../comman/apis/movieApiKey";



export const fetchAsyncMovies = createAsyncThunk(
    "movies/fetchAsyncMovies",
    async(term)=>{
        const res = await movieApi.get(`?apiKey=${APIKey}&s=${term}&type=movie`);
            return res.data;
    }
);

export const fetchAsyncShows = createAsyncThunk(
    "movies/fetchAsyncShows",
    async(term)=>{
        const res = await movieApi.get(`?apiKey=${APIKey}&s=${term}&type=series`);
            return res.data;
    }
);

export const fetchAsyncMoviesOrShowsDetail = createAsyncThunk(
    "movies/fetchAsyncMoviesOrShowsDetail",
    async(id)=>{
        const res = await movieApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`);
            return res.data;
    }
);

const initialState ={
    movies:{},
    shows:{},
    movieOrShowsDetail:{},
    loading: 0,
}


const MovieSlice =  createSlice({
    name:"movies",
    initialState,
    reducers:{
        removeMovieOrShowDetail: (state)=>{
            state.movieOrShowsDetail={};
        }
    },
    extraReducers:{
        [fetchAsyncMovies.pending]:(state)=>{
            console.log("pending");
            return {...state, loading:0};
        },
        [fetchAsyncMovies.fulfilled]:(state,{payload})=>{
            console.log("fullfilled");
            return {...state, movies:payload, loading:1};
        },
        [fetchAsyncMovies.rejected]:()=>{
            console.log("rejected");
        },
        [fetchAsyncShows.fulfilled]:(state,{payload})=>{
            console.log("fullfilled");
            return {...state, shows:payload, loading:1};
        },
        [fetchAsyncMoviesOrShowsDetail.fulfilled]:(state,{payload})=>{
            console.log("fullfilled");
            return {...state, movieOrShowsDetail:payload};
        },
    }
});

export const  { removeMovieOrShowDetail } = MovieSlice.actions;
export const getAllMovies = (state)=>state.movies.movies;
export const getAllShows = (state)=>state.movies.shows;
export const getLoading = (state)=>state.movies.loading;
export const getAllMoviesOrShowDetail = (state)=>state.movies.movieOrShowsDetail;

export default MovieSlice.reducer; 