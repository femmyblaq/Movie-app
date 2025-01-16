import MovieCard from "../components/MovieCard"


const Home = () => {
    const movies = [
        {id: 1, title: "The Squid Game", releaseDate: "2024"},
        {id: 2, title: "Deadpool", releaseDate: "2023"},
        {id: 3, title: "X-man", releaseDate: "2020"}
    ]
    return (
        <>
            <div className="movie-grid">
                {movies.map(movie => <MovieCard props={movie} key={movie.id}/>)}
            </div>
        </>
    )
}

export default Home