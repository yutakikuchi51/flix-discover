import './movie-modal.css';
import Image from 'next/image';
export default function MovieModal({movie, onClose}){

    return(
        <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <p>{movie.genre}</p>
                <div className='plot'>{movie.plot}</div>
                <div className='container'>
                {movie.trailer && (
                    <a href={movie.trailer} target="_blank" rel="noopener noreferrer" className='trailer-container'>
                        <Image 
                        src="/_images/youtube.png"
                        alt="youtube"
                        width={23}
                        height={10}
                        layout="fixed"
                        className="youtube-icon"/>
                            Watch Trailer
                        </a>
                        )}
                    <button className="close" onClick={onClose}>Back to list</button>
                </div>
            </div>
        </div>
    );
}