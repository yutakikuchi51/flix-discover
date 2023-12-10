// display movie info (like "Item component")
import Image from 'next/image';

export default function MovieCard({ movie }) {
    const getYouTubeId = (url) => {
      if (!url) return null; 
  
      const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
      const match = url.match(regExp);
    
      return (match && match[2].length === 11) ? match[2] : null;
    };
  

    const videoId = movie.trailer ? getYouTubeId(movie.trailer) : null;
  
    return (
        <div className="mx-4 my-4 w-60 h-60 bg-blueGray-600 rounded-2xl">
            {movie.thumbnail && (
            <Image 
                src={movie.thumbnail} 
                alt={`Thumbnail of ${movie.name}` }
                width={320}
                height={180}
                layout="responsive" />
            )}
            <h3>{movie.name}</h3>
            <p>{movie.year}</p>
            <p>{movie.genre}</p> 
            {videoId && (
            <a href={`https://www.youtube.com/watch?v=${videoId}`} target="_blank" rel="noopener noreferrer">
                Watch Trailer
            </a>
            )}
        </div>
    );
  }
  