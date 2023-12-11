import Image from 'next/image';
import { useState, useEffect } from "react";
import MovieModal from './movie-modal';

const movieCache = {};

export default function MovieCard({ movieId }) {
    const [modalOpen, setModalOpen] = useState(false);
    const [movieDetails, setMovieDetails] = useState(null);

    console.log(movieId);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            if (movieCache[movieId]) {
                setMovieDetails(movieCache[movieId]);
                return;
            }

            const url = `https://moviesminidatabase.p.rapidapi.com/movie/id/${movieId}/`;
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
                movieCache[movieId] = data.results;
                setMovieDetails(data.results);
            } catch (error) {
                console.error('Fetch error: ', error);
            }
        };

        fetchMovieDetails();
    }, [movieId]);

    if (!movieDetails) {
        return <div>Loading...</div>;
    }

    const handleMovieCardClick = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    console.log(movieDetails);
  
    return (
        <div onClick={handleMovieCardClick} className="mx-4 my-4 w-60 h-60 bg-blueGray-600 rounded-2xl">
            {movieDetails && movieDetails.image_url && (
            <Image 
            src={movieDetails.image_url} 
            alt={`Thumbnail of ${movieDetails.title}`}
            width={40}
            height={30}
            layout="responsive"
            />
            )}
            <h3>{movieDetails.title}</h3>
            <p>{movieDetails.year}</p>
            <p>{movieDetails.movie_length} min</p>
            <p>{movieDetails.rating}</p>
            {modalOpen && (
                <MovieModal movie={movieDetails} onClose={handleCloseModal} />
            )}
        </div>
    );
}
