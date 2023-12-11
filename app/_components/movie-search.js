import { useState } from "react";
import MovieCard from "./movie-card";

export default function SearchMovie({ moviesData }) {
    const [inputValue, setInputValue] = useState("");
    const [searchByName, setSearchByName] = useState("");

    const handleSearch = () => {
        setSearchByName(inputValue);
    };

    const getMovies = () => {
        return searchByName ? moviesData.filter((movie) => movie.name.toLowerCase().includes(searchByName.toLowerCase())) : [];
    };

    return (
        <div>
            <input 
                type="text" 
                placeholder="Search your movie by name"
                onChange={(event) => setInputValue(event.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
            <div>
                {getMovies().map((movie) => (
                    <div key={movie.id}>
                        <MovieCard movie={movie} />
                    </div>
                ))}
            </div>
            
        </div>
    );
}
