import './movie-modal.css';
export default function MovieModal({movie, onClose}){

    return(
        <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h2>{movie.name}</h2>
                <p>{movie.genre}</p>
                <p>{movie.plot}</p>
                <div className='container'>
                    {movie.trailer && (
                    <a href={movie.trailer} target="_blank" rel="noopener noreferrer" className="trailer-button">
                        Watch Trailer
                    </a>
                    )}
                    <button className="close" onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
    );
}