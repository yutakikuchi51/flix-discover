"use client"

import MovieCard from "./movie-card";
import moviesData from "../_data/movies.json"
import { useState, useEffect } from "react";
import GenreMovieList from "./genre-movie-list";
import Link from 'next/link';
import './movie-list.css';

export default function MovieList() {
    const [selectedCategory, setSelectedCategory] = useState("");

    const handleGenreSelect = (event) => {
        setSelectedCategory(event.target.value);
    };

    return (
        <div style={{ height: '100vh' }}>
            <div className="message-container">
                <div className="message">Find your movie by genre!</div>
            </div>
            <div className="select-container">
                    <select onChange={handleGenreSelect} className="select-genre">
                        <option value="Adventure">Adventure</option>
                        <option value="Animation">Animation</option>
                        <option value="Crime">Crime</option>
                        <option value="Documentary">Documentary</option>
                        <option value="Drama">Drama</option>
                        <option value="Family">Family</option>
                        <option value="Fantasy">Fantasy</option>
                        <option value="History">History</option>
                        <option value="Horror">Horror</option>
                        <option value="Music">Music</option>
                        <option value="Mystery">Mystery</option>
                        <option value="Romance">Romance</option>
                        <option value="Science Fiction">Science Fiction</option>
                        <option value="Thriller">Thriller</option>
                        <option value="War">War</option>
                        <option value="Western">Western</option>
                    </select>                  
            </div>
            <div style={{ height: '100vh' }}>
            {selectedCategory && <GenreMovieList genre={selectedCategory} />}
            </div>
        </div> 
    )
}