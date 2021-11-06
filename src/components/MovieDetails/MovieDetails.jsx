import { useHistory } from "react-router";

function MovieDetails(props) {
    const history = useHistory();
    
    const backToList = () => {
        history.push('/');
    }

    return (
        <>
        <button onClick={backToList}>Back to List</button>
        </>
    )
}

export default MovieDetails;