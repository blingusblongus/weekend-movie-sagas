import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function AddMovie(props) {
    const dispatch = useDispatch();
    const genres = useSelector(store => store.genres);
    const [movie, setMovie] = useState({
        title: '',
        poster: '',
        description: '',
        genre_id: ''
    });

    useEffect(() => {
        dispatch({type:'FETCH_GENRES'});
    }, []);

    const postMovie = (e) => {
        e.preventDefault();

        axios.post('/api/movie/', movie)
            .then(response => {
                console.log('POSTED')
            }).catch(err => {
                console.log(err);
            });
    }

    console.log(movie);
    console.log('genre', genres);


    return (
        <>
            <form onSubmit={postMovie}>
                <input type="text"
                    placeholder="Title"
                    className="input-field"
                    name="title"
                    value={movie.title}
                    onChange={(e) => setMovie({ ...movie, title: e.target.value })}
                />
                <input type="text"
                    placeholder="Poster URL"
                    className="input-field"
                    name="title"
                    value={movie.poster}
                    onChange={(e) => setMovie({ ...movie, poster: e.target.value })}
                />
                <textarea type="text"
                    placeholder="Description"
                    className="input-field"
                    name="title"
                    value={movie.description}
                    onChange={(e) => setMovie({ ...movie, description: e.target.value })}
                />
                <select 
                    name="genre"
                    value={movie.id}
                    onChange={(e) => setMovie({...movie, genre_id: e.target.value})}
                    required>
                    <option name="choose" value={0} disabled>Select a Genre</option>
                    {genres.map((genre, i) => {
                        console.log(genre.id);
                        return (
                        <option 
                            key={i} 
                            value={genre.id}
                            >{genre.name}</option>
                        );
                    })}
                </select>
                <button type="submit">Add Movie</button>
            </form>
        </>
    )
}

export default AddMovie;