"use client"

import MovieCard from "./movie-card";
import moviesData from "../_data/movies.json"

export default function MovieList() {

    let moviesArray = moviesData.map((movie) => ({...movie}));

    return (
        <div>
            <section>
                {moviesArray.map((movie) => (<MovieCard key={movie.id} movie={movie} />))}
            </section>
        </div>
    )
}