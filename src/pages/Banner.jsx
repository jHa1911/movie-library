import React from "react";
import { useState, useEffect } from "react";
import './banner.css';
import MovieContent from "../components/movieContent";
import MovieDate from "../components/MovieDate";
import PlayBtn from "../components/PlayBtn";
import MovieSwiper from "../components/MovieSwiper";


function Banner() {
    const [movies, setMovies] = useState([]);
    
    const fetchMovies = async () => {
        fetch('http://localhost:3000/data/movieData.json')
            .then(res => res.json())
            .then(data => setMovies(data))
            .catch(e => console.log(e.message));
    };

    useEffect(() => {
        fetchMovies();
    }, []);

    const handleSlideChange = (id) => {
        console.log('Slide changed to: ', id);
        const updatedMovies = movies.map(movie => {
            if(movie._id === id) {
                movie.active = true;
            } else {
                movie.active = false;
            }
            return movie;
        });
        setMovies(updatedMovies);
    }

    return (
        <div className="banner">
            {
                movies && movies.length>0 && movies.map(movie => (
                    <div className="movie">
                        <img
                            src={movie.bgImg}
                            alt="Background" 
                            className={`bgImg ${movie.active ?  'active' : undefined}`}
                        />
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-6 col-md-12">
                                    <MovieContent movie={movie} />
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <MovieDate movie={movie} />
                                    <PlayBtn movie={movie} />
                            </div>
                        </div>
                    </div>
        </div>
                ))
            }
            
            {
                movies && movies.length>0 && <MovieSwiper slides={movies} slideChange={handleSlideChange} />
            }
            
        </div>
    );
}

export default Banner;
