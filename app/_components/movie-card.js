import Image from 'next/image';
import { useState, useEffect } from "react";
import MovieModal from './movie-modal';
import './movie-card.css';

const movieCache = {};

export default function MovieCard({ movieId }) {
    const [modalOpen, setModalOpen] = useState(false);
    const [movieDetails, setMovieDetails] = useState(null);


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

    function formatMovieLength(minutes) {
        const hours = Math.floor(minutes / 60);
        const remainingMinutes = minutes % 60;
        return `${hours}h ${remainingMinutes}min`;
    }
  
    return (
        <div onClick={handleMovieCardClick} className='movie-card'>
            <div className='card-left'>
                {movieDetails && movieDetails.image_url && (
                <Image 
                src={movieDetails.image_url} 
                alt={`Thumbnail of ${movieDetails.title}`}
                width={200}
                height={250}
                layout="fixed"
                />
                )}
            </div>
            <div className='card-right'>
                <div className='title'>{movieDetails.title}</div>
                <div className='year'>{movieDetails.year}</div>
                <div className='movie-length'>{formatMovieLength(movieDetails.movie_length)}</div>
                <div className='rating'>
                    <Image
                    src="/_images/star.png"
                    alt="star icon"
                    width={23}
                    height={10}
                    layout="fixed"
                    className='star'/> 
                    <div className='rate-num'>
                        {movieDetails.rating}
                    </div>
                    <div className='outOf'>/10</div>
                </div>
            </div>
            {modalOpen && (
                <MovieModal movie={movieDetails} onClose={handleCloseModal} />
            )}
        </div>
    );
}
