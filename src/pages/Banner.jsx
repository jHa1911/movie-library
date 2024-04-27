import React from "react";
import { useState, useEffect } from "react";
import './banner.css';
import bgImg from '../pages/bg-transformer.jpg';
import MovieContent from "../components/movieContent";
import MovieDate from "../components/MovieDate";


function Banner() {
    const [movies, setMovies] = useState([]);
    
    const fetchMovies = async () => {
        fetch('http://localhost:3000/data/moviesData.json')
            .then(response => response.json())
            .then(data => setMovies(data))
            .catch(err => console.log(err));
    };

    useEffect(() => {
        fetchMovies();
    }, []);

    return (
        <div className="banner">
            <div className="movie">
                <img src={bgImg} alt="Background" className="bgImg active" />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <MovieContent />
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <MovieDate />
                            <div className="trailer d-flex align-items-center justify-content-center active">
                                <a href="/" className="playBtn">
                                    <ion-icon name="play-outline"></ion-icon>
                                </a>
                                <p>Watch  Trailer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;
