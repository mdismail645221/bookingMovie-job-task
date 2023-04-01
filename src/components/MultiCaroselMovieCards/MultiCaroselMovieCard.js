import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useNavigate } from 'react-router-dom';
import '../MultiCaroselMovieCards/MultiCaroselMovieCard.css'

const MultiCaroselMovieCards = ({ movie }) => {
    // console.log('movie', movie)
    // destructure movie 
    var navigate = useNavigate();
    const { name, image, summary, id} = movie?.show;
    const sumarySlice = summary.slice(3,  150);
    // console.log(sumarySlice)
    
    
    const handleGoingDetailsRoutes = (movie) => {
        console.log({movie})
        const { name, image, summary, id } = movie?.show;
        if (movie){
            navigate('/movieDetails', { state: { movie } })
        }
    }


    return (
        <div>
            <Card className='CardContainer'>
                <Card.Img variant="top" src={image?.medium} />
                <Card.Body className='cardBody-container'>
                    <Card.Title style={{fontSize: '5rem'}}>{name}</Card.Title>
                    <Card.Text>
                        {summary.length >= 150 ? `${summary.slice(2, 150)}....`: summary}
                    </Card.Text>
                    {id && <a onClick={()=> handleGoingDetailsRoutes(movie)}><Button variant="primary">details</Button></a>}
                </Card.Body>
            </Card>
        </div>
    );
};

export default MultiCaroselMovieCards;