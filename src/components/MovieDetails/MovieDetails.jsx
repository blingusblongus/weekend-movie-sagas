import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useHistory, useParams } from "react-router";
import './MovieDetails.css';

function MovieDetails(props) {
    const history = useHistory();
    // getting the id from useParams allows for
    // keeping track of current movie on refresh
    const { id } = useParams();
    const [details, setDetails] = useState();

    // get details from db on load
    useEffect(() => {
        getDetails();
    }, [])

    // Send get request for specific movie data
    const getDetails = () => {
        axios.get(`api/movie/details?id=${id}`)
            .then(response => {
                console.log(response.data);
                setDetails(response.data);
            }).catch(err => {
                console.log(err);
            })
    }

    // navigate back to homepage
    const backToList = () => {
        history.push('/');
    }

    return (
        <>
            {details && (
                <div>
                    <button onClick={backToList}>Back to List</button>

                    <h2>{details.title}</h2>

                    <img src={details.poster}></img>

                    <p id="genres">
                        {details.genres.length > 1 ? 'Genres: ' : 'Genre: '}
                        {details.genres.join(', ')}
                    </p>

                    <p>{details.description}</p>
                </div>
            )}
        </>
    )
}

export default MovieDetails;