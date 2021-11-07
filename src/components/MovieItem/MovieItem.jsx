import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { Card } from "@mui/material";
import './MovieItem.css';

function MovieItem({ movie }) {
    const history = useHistory();
    const dispatch = useDispatch();

    const showDetails = () => {
        //send selected movie to selectedReducer
        dispatch({
            type: 'SET_SELECTED',
            payload: movie.id
        });

        //Then navigate to details page
        history.push(`/details/${movie.id}`);
    }

    return (

        <div className="card" onClick={showDetails}>
            <Card elevation={4} sx={{ borderRadius: '20px' }}>
                <div className="inner-card">
                    <h3>{movie.title}</h3>
                    <div className="break"></div>
                    <div className="img-wrapper">
                        
                        <img
                            src={movie.poster}
                            alt={movie.title}
                            />
                    </div>
                </div>
            </Card>
        </div>

    )
}

export default MovieItem;