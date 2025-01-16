

const MovieCard = ({movie}) => {

    const onFavoriteClick = () => {
        alert("I got clicked")
    }
    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img src={MovieCard.url} alt={MovieCard.title}/>
                <div className="movie-overlay">
                    <button className="favorite-btn" onClick={onFavoriteClick}>
                    🤍
                    </button>
                </div>
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date}</p>
            </div>
        </div>
    )
}

export default MovieCard