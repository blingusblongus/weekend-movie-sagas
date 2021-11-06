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
        genre: ''
    });

    useEffect(() => {
        dispatch({type:'FETCH_GENRES'});
    }, []);

    const postMovie = () => {
        axios.post('/api/movie/', movie)
            .then(response => {
                console.log('POSTED')
            }).catch(err => {
                console.log(err);
            });
    }

    console.log(genres);
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
                <select name="genre" defaultValue="choose" required>
                    <option name="choose" value="0" disabled hidden>Select a Genre</option>
                    {genres.map((genre, i) => {
                        return <option key={i} value={genre.name}>{genre.name}</option>;
                    })}
                </select>
                <button type="submit">Add Movie</button>
            </form>
        </>
    )
}

export default AddMovie;