import { useState, useEffect } from "react";
import MovieCard from "./movie-card";
import './genre-movie-list.css'

export default function GenreMovieList({genre}) {
    const [movies, setMovies] = useState([]);
    const [startIndex, setStartIndex] = useState(0);

    useEffect(() => {
        const fetchMoviesByGenre = async () => {
            const url = `https://moviesminidatabase.p.rapidapi.com/movie/byGen/${genre}/`;
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
                setMovies(data.results);
            } catch (error) {
                console.error('Fetch error: ', error);
            }
        };

        fetchMoviesByGenre();
    }, [genre]);

    const handleNextClick = () => {
        setStartIndex(prevIndex => Math.min(prevIndex + 3, movies.length - 3));
    };

    const handlePrevClick = () => {
        setStartIndex(prevIndex => Math.max(prevIndex - 3, 0));
    };

    const currentMovies = movies.slice(startIndex, startIndex + 3);
    return (
        <div style={{ height: '100vh', backgroundColor: '#1E293B'}}>
            <div className="horizontal-list">
                
                {currentMovies.map(movie => (
                    <div key={movie.imdb_id}>
                        <MovieCard movieId={movie.imdb_id} />
                    </div>
                ))}
                
            </div>
            <div className="button-container">
                <button onClick={handlePrevClick} className="prev-button">Prev</button>
                <button onClick={handleNextClick} className="next-button">Next</button>
            </div>
        </div>
    );
}
