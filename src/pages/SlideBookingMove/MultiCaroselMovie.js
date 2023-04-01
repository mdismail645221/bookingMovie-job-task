import React, { useEffect, useState } from 'react';
import Carousel from "react-multi-carousel";
import MultiCaroselMovieCard from '../../components/MultiCaroselMovieCards/MultiCaroselMovieCard';
import '../SlideBookingMove/MultiCaroselMovie.css'

const MultiCaroselMovie = () => {
    const [movies, setMovies] = useState([])
    const [loading, setLoading]= useState(true)
    // MOVIE REST API 
    useEffect(()=> {
        setLoading(true)
        fetch(`https://api.tvmaze.com/search/shows?q=all`)
        .then(res=> res.json())
        .then(data=> {
            // console.log('rest api movie', data)
            setMovies(data)
            setLoading(false)
        })
    }, [])





    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 1024 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 1024, min: 800 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 800, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };


    if(loading){
        return <div>Loading....</div>
    }


    return (
        <div className='multiCarouselContainer'>
            <Carousel
                className='multiCarousel'
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                transitionDuration={1500}
            >
                {
                    movies?.map(movie => <MultiCaroselMovieCard movie={movie}></MultiCaroselMovieCard>)
                }
            </Carousel>

        </div>
    );
};

export default MultiCaroselMovie;