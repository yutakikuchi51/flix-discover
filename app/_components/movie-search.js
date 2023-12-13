"use client";
import { useState } from "react";
import MovieCard from "./movie-card";
import './genre-movie-list.css';
import './movie-search.css';

export default function SearchMovie() {
    const [inputValue, setInputValue] = useState("");
    const [movieIds, setMovieIds] = useState([]);
    const [startIndex, setStartIndex] = useState(0);
    const [searchPerformed, setSearchPerformed] = useState(false);
    const handleSearch = async () => {
        const url = `https://moviesminidatabase.p.rapidapi.com/movie/imdb_id/byTitle/${inputValue}/`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'd2738eb68emsh51d3a3d23fd7760p15abb2jsna0a8694d167c',
                'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setMovieIds(data.results);
            setSearchPerformed(true); 
        } catch (error) {
            console.error('Fetch error: ', error);
        }
    };

    const handleNextClick = () => {
        setStartIndex(prevIndex => Math.min(prevIndex + 3, movieIds.length - 3));
    };

    const handlePrevClick = () => {
        setStartIndex(prevIndex => Math.max(prevIndex - 3, 0));
    };

    const currentMovieIds = movieIds.slice(startIndex, startIndex + 3);

    return (
        <div>
            <div className="search-container">
                <input 
                    type="text" 
                    placeholder="Search your movie by name"
                    onChange={(event) => setInputValue(event.target.value)}
                    className="search-bar"
                />
                <button onClick={handleSearch} className="search-button">Search</button>
            </div>
            <div className="horizontal-list">
                {currentMovieIds.map(movie => (
                    <div key={movie.imdb_id}>
                        <MovieCard movieId={movie.imdb_id} />
                    </div>
                ))}
            </div>
            {searchPerformed && (
                <div className="button-container">
                    <button onClick={handlePrevClick} className="prev-button">Prev</button>
                    <button onClick={handleNextClick} className="next-button">Next</button>
                </div>
            )}
        </div>
    );
}
