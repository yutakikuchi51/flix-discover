// display movie info (pke "Item component")
export default function MovieCard({movie}){
    return (
        <div>
            <h3>{movie.name}</h3>
            <p>{movie.year}</p>
            <p>{movie.genre}</p>
        </div>
    );
}