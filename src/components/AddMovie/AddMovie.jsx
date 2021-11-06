import axios from "axios";
import { useState } from "react";

function AddMovie(props) {
    const [movie, setMovie] = useState({
        title: '',
        poster: '',
        description: '',
        genres: []
    });

    const postMovie = () => {
        axios.post('/api/movie/add', movie)
            .then(response => {
                console.log('POSTED')
            }).catch(err => {
                console.log(err);
            });
    }
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
                <button type="submit">Add Movie</button>
            </form>
        </>
    )
}

export default AddMovie;