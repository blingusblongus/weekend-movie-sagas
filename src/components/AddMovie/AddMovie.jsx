import { TextField, Button, Select, MenuItem } from "@material-ui/core";
import { Paper } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import './AddMovie.css';
import { InputLabel } from "@mui/material";
import { useHistory } from "react-router";

function AddMovie(props) {
    const dispatch = useDispatch();
    const history = useHistory();

    const genres = useSelector(store => store.genres);
    const [movie, setMovie] = useState({
        title: '',
        poster: '',
        description: '',
        genre_id: []
    });

    // update list of genres
    useEffect(() => {
        dispatch({ type: 'FETCH_GENRES' });
    }, []);

    // Add movie to database
    const postMovie = (e) => {
        e.preventDefault();
        axios.post('/api/movie/', movie)
            .then(response => {
                console.log('POSTED')
                history.push('/');
            }).catch(err => {
                console.log(err);
            });
    }

    // return to home screen
    const cancel = (e) => {
        e.preventDefault();
        history.push('/');
    }

    return (
        <div id="form-container">
            <Paper elevation={5}>
                <form id="add-form" onSubmit={postMovie}>
                    <TextField type="text"
                        placeholder="Title"
                        className="input-field"
                        name="title"
                        value={movie.title}
                        onChange={(e) => setMovie({ ...movie, title: e.target.value })}
                    />
                    <TextField type="text"
                        placeholder="Poster URL"
                        className="input-field"
                        name="title"
                        value={movie.poster}
                        onChange={(e) => setMovie({ ...movie, poster: e.target.value })}
                    />
                    <TextField type="text"
                        placeholder="Description"
                        className="input-field"
                        name="title"
                        value={movie.description}
                        multiline
                        rows={4}
                        onChange={(e) => setMovie({ ...movie, description: e.target.value })}
                    />

                    <InputLabel>Genre</InputLabel>
                    <Select
                        name="genre"
                        value={movie.genre_id}
                        onChange={(e) => setMovie({ ...movie, genre_id: e.target.value })}
                        required
                        multiple>
                        <MenuItem name="choose" value={0} disabled>Select a Genre</MenuItem>
                        {genres.map((genre, i) => {
                            return (
                                <MenuItem
                                    key={i}
                                    value={genre.id}
                                >{genre.name}</MenuItem>
                            );
                        })}
                    </Select>
                    <div className="flex-container space-between" id="btn-container">
                        <Button type="cancel"
                            variant="outlined"
                            onClick={cancel}>Cancel</Button>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary">Save</Button>
                    </div>
                </form>
            </Paper>
        </div>
    )
}

export default AddMovie;