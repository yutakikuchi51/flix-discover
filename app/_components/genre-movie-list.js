import { useState, useEffect } from "react";
import MovieCard from "./movie-card";

export default function GenreMovieList({genre}) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        // APIからジャンルに基づいた映画のリストを取得
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

    // 最初の2つの映画IDのみを取り出す
    const firstTwoMovies = movies.slice(0, 2);

    return (
        <div>
            <p>{genre}</p>
            <div className="flex overflow-x-auto py-4">
                {firstTwoMovies.map(movie => (
                    <div key={movie.imdb_id}>
                        <MovieCard movieId={movie.imdb_id} />
                    </div>
                ))}
            </div>
        </div>
    );
}
