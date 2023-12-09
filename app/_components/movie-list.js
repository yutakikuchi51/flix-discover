"use client"

import MovieCard from "./movie-card";
import moviesData from "../_data/movies.json"

export default function MovieList() {

    //let moviesArray = moviesData.map((movie) => ({...movie}));
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


    return (
        <div>
            <div>
                <p>Adventure</p>
                <div className="flex overflow-x-auto py-4">
                    {AdventureMovies.map((movie) => (
                        <div  key={movie.id}>
                        <MovieCard movie={movie} />
                        </div>
                    ))}
                </div>
            </div>
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
        </div>
    )
}