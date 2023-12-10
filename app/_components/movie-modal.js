import './movie-modal.css';
export default function MovieModal({movie, onClose}){

    return(
        <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h2>{movie.name}</h2>
                <p>{movie.year}</p>
                <p>{movie.genre}</p>
                <p>{movie.description}</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
}