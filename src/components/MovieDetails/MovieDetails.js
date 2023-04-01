import React from 'react';
import { useLocation } from 'react-router-dom';
import Image from 'react-bootstrap/Image'

const MovieDetails = () => {
    const { state } = useLocation();
    const {movie} = state;
    const { score, show } = movie;
    console.log("movieeeeee", show)
    
    return (
        <section style={{ overflow: 'hidden' }} className="container my-5">
            <div className='row movieDetailsContainer' >
                <div className='col-md-6'>
                    <Image className='img-fluid' style={{height: '70vh', width: '100%', border: '1px solid gray', borderRadius: '10px'}} src={show?.image?.original} alt={show?.name} />
                </div>
                <div className='col-md-6'>
                    <div>
                        <h1>Movie Name: <span>{show?.name}</span></h1>
                        <h3>Status: <span>{show?.status}</span></h3>
                        <p>{show?.summary}</p>
                        <button className='btn btn-primary'>Booking Movie</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MovieDetails;