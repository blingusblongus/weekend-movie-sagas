import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { Container, Paper } from "@material-ui/core";

function MovieItem({ movie }) {
    const history = useHistory();
    const dispatch = useDispatch();
    
    const showDetails = () => {
        //send selected movie to selectedReducer
        dispatch({
            type: 'SET_SELECTED',
            payload: movie.id
        });

        history.push(`/details/${movie.id}`);
    }
    
    return (

            <Paper>
        <div>
            <h3>{movie.title}</h3>
            <img 
                src={movie.poster} 
                alt={movie.title}
                onClick={showDetails} />
        </div>
        </Paper>
    )
}

export default MovieItem;