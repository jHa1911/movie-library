import React from 'react'
import './search.css'

function Search() {
    return (
        <div className="search">
            <input type="text" placeholder="Search for a movie" />
            <ion-icon name='search-outline'></ion-icon>
        </div>
    );
}

export default Search