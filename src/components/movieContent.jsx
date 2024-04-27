import React from 'react'
import './movieContent.css'
import titleImg from '../pages/transformer-title.png';

function MovieContent() {
    return (
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
    );
}

export default MovieContent