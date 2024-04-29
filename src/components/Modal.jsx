import React from 'react'
import './modal.css'

function Modal({movie, status, toggleModal}) {
    return (
        <div className={`movieModal  ${status ? "active" : undefined}`}>
            <button className="modalClose" onClick={toggleModal}>
                <ion-icon name="close-outline"></ion-icon>
            </button>
            <iframe
                width="1280"
                height="720"
                src={movie.video}
                title={`${movie.title} | Official Trailer`}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture, web-share"
                allowfullscreen
            ></iframe>
        </div>
    
    )
}

export default Modal