import React from "react";
import { useState, useEffect } from "react";
import './banner.css';
import bgImg from '../pages/bg-transformer.jpg';
import titleImg from '../pages/transformer-title.png';

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
                            <div className="content active">
                                <img src={titleImg} alt="movie-title" className="movie-title" />
                                <h4><span>Year</span>
                                    <span><i>Age</i></span>
                                    <span>length</span>
                                    <span>category</span>
                                </h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                    Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. 
                                    Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. 
                                    Praesent mauris. Fusce nec tellus sed augue semper porta. 
                                    Mauris massa. Vestibulum lacinia arcu eget nulla. 
                                    Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                                </p>
                                <div className="button">Button</div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="date active">
                                <h2>On 15th August</h2>
                            </div>
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
