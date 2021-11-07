import { Button } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import MovieItem from '../MovieItem/MovieItem';
import './MovieList.css'

function MovieList() {
    const history = useHistory();
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    // Update Movie list on load
    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    // navigate to Add Movie page
    const navAddMovie = () => {
        history.push('/add');
    }

    return (
        <main className="relative">
            <h1>MovieList</h1>
            <Button 
                id="nav-add"
                variant="contained"
                size="large" 
                onClick={navAddMovie}>Add movie</Button>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <MovieItem key={movie.id} movie={movie} />
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;