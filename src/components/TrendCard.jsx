import React from 'react';
import './trendCard.css'

function TrendCard({ slide }) {
    return (
        <div className="trend-card">
            <img className="img-fluid" src={slide.previewImg} alt="" />
            <button>
                Add to calendar <ion-icon name="calendar-outline"></ion-icon>
            </button>
        </div>
    );
}
export default TrendCard;