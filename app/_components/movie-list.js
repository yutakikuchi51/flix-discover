"use client"

import MovieCard from "./movie-card";
import moviesData from "../_data/movies.json"
import { useState } from "react";

export default function MovieList() {

    const [selectedCategory, setSelectedCategory] = useState(null);
    //const [modalOpen, setModalOpen] = useState(false);

    const getMovies = () => {
        return selectedCategory ? moviesData.filter((movie) => movie.genre === selectedCategory) : [];
      };

    const handleGenreSelect = (event) => {
        setSelectedCategory(event.target.value);
    };

    const Adventure = "Adventure";
    const Thriller = "Thriller";
    const Crime = "Crime";
    const Animation = "Animation"
    const Documentary = "Documentary"
    const AdventureMovies = moviesData.filter((movie) => movie.genre === Adventure);
    const ThrillerMovies = moviesData.filter((movie) => movie.genre === Thriller);
    const CrimeMovies = moviesData.filter((movie) => movie.genre === Crime);
    const AnimationMovies = moviesData.filter((movie) => movie.genre === Animation);
    const DocumentaryMovies = moviesData.filter((movie) => movie.genre === Documentary);

    // const handleMovieCardClick = (movie) => {
    //     setClickedMovie(movie);
    //     setModalOpen(true);
    // };

    // const handleCloseModal = () => {
    //     setIsModalOpen(false);
    //     setSelectedMovie(null);
    // };

    return (
        <div>
            <div>
                <select onChange={handleGenreSelect} className="rounded">
                    <option value="Adventure">Adventure</option>
                    <option value="Thriller">Thriller</option>
                    <option value="Crime">Crime</option>
                    <option value="Animation">Animation</option>
                    <option value="Documentary">Documentary</option>
                </select>
            </div>
            <div>
                {selectedCategory && (
                    <div>
                        <div className="flex overflow-x-auto py-4">
                            {getMovies().map((movie) => (
                                <div key={movie.id}>
                                    <MovieCard movie={movie} />
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {selectedCategory !== "Adventure" && (
            <div>
                <p>Adventure</p>
                <div className="flex overflow-x-auto py-4">
                    {AdventureMovies.map((movie) => (
                        <div  key={movie.id} >
                        <MovieCard movie={movie} />
                        </div>
                    ))}
                </div>
            </div>
            )}

            {selectedCategory !== "Thriller" && (
            <div>
                <p>Thriller</p>
                <div className="flex overflow-x-auto py-4">
                    {ThrillerMovies.map((movie) => (
                        <div key={movie.id}>
                        <MovieCard movie={movie} />
                        </div>
                    ))}
                </div>
            </div>
            )}

            {selectedCategory !== "Crime" && (
            <div>
                <p>Crime</p>
                <div className="flex overflow-x-auto py-4">
                    {CrimeMovies.map((movie) => (
                        <div key={movie.id}>
                        <MovieCard movie={movie} />
                        </div>
                    ))}
                </div>
            </div>
            )}

            {selectedCategory !== "Animation" && (
            <div>
                <p>Animation</p>
                <div className="flex overflow-x-auto py-4">
                    {AnimationMovies.map((movie) => (
                        <div key={movie.id}>
                        <MovieCard movie={movie} />
                        </div>
                    ))}
                </div>
            </div>
            )}

            {selectedCategory !== "Documentary" && (            
            <div>
                <p>Documentary</p>
                <div className="flex overflow-x-auto py-4">
                    {DocumentaryMovies.map((movie) => (
                        <div key={movie.id}>
                        <MovieCard movie={movie} />
                        </div>
                    ))}
                </div>
            </div>
            )}
        </div>
    )
}