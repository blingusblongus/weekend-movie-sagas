import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import MovieItem from '../MovieItem/MovieItem';
import './MovieList.css'

function MovieList() {
    const history = useHistory();
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    const navAddMovie = () => {
        history.push('/add');
    }

    return (
        <main className="relative">
            <h1>MovieList</h1>
            <button id="nav-add" onClick={navAddMovie}>Add movie</button>
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