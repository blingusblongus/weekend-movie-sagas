import { Button, Card } from "@mui/material";
import { Typography } from "@mui/material";
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
                <div id="details-card">
                    <Card elevation={5}>
                        <div id="details-inner">
                            <Button variant="outlined" onClick={backToList}>Back to List</Button>

                            <h2>{details.title}</h2>

                            <img src={details.poster}></img>

                            <p id="genres">
                                {details.genres.length > 1 ? 'Genres: ' : 'Genre: '}
                                {details.genres.join(', ')}
                            </p>

                            <p className="details-p">{details.description}</p>
                        </div>
                    </Card>
                </div>
            )}
        </>
    )
}

export default MovieDetails;