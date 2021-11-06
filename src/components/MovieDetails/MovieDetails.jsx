import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";

function MovieDetails(props) {
    const history = useHistory();
    const { id } = useParams();
    const reduxId = useSelector(store => store.selectedId);
    const [details, setDetails] = useState();

    useEffect(() => {
        getDetails();
    }, [])

    const getDetails = () => {
        axios.get(`api/movie/details?id=${id}`)
            .then(response => {
                console.log(response.data);
                setDetails(response.data);
            }).catch(err => {
                console.log(err);
            })
    }

    const backToList = () => {
        history.push('/');
    }


    console.log(details);
    return (

        <>
            {details && (
                <>
                    <h2>{details.title}</h2>
                    <button onClick={backToList}>Back to List</button>
                </>
            )}

        </>
    )
}

export default MovieDetails;