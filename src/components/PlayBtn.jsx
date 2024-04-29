import React, {useState} from 'react'
import './playBtn.css'
import Modal from './Modal'

function PlayBtn({ movie}) {
    const [showModal, setShowModal] = useState(false);
    const toggleModal = () => {setShowModal(!showModal)};
    return (
        <>
            <div className={`trailer d-flex align-items-center justify-content-center ${movie.active ?  'active' : undefined}`}>
                <button className="playBtn" onClick={toggleModal}>
                    <ion-icon name="play-outline"></ion-icon>
                </button>
                <p>Watch  Trailer</p>
        </div>
        {movie.active && <Modal movie={movie} status={showModal} toggleModal={toggleModal} /> }
        </>
    )
}

export default PlayBtn