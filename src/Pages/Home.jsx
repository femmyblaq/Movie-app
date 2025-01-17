import MovieCard from "../components/MovieCard"
import { useState, useEffect } from "react"
import { getPopularMovies, SearchedMovies } from "../service/api"


const Home = () => {
    const [search, setSearch] = useState("")
    const [movies, setMovie] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies()
                // console.log(popularMovies)
                setMovie(popularMovies)
            } catch (err) {
                setError("Failed to load movies...")
            } finally {
                setLoading(false)
            }
        }

        loadPopularMovies()
    }, [])
    // const movies = [
    //     {id: 1, title: "The Squid Game", releaseDate: "2024"},
    //     {id: 2, title: "Deadpool", releaseDate: "2023"},
    //     {id: 3, title: "X-man", releaseDate: "2020"}
    // ]

    const submitHandler = async (e) => {
        e.preventDefault();

        if (!search.trim()) return
        if (loading) return
        setLoading(true)

        try {
            const searchResult = await SearchedMovies(search)
            console.log("from Home file:", searchResult)
            setMovie(searchResult)
            setError(null)
        } catch (err) {
            console.log(err)
            setError("Failed to search movies...")
        } finally {
            setLoading(false)
        }

        setSearch("")
    }
    return (
        <>
            <form onSubmit={submitHandler}>
                <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
                <button type="submit" >Search</button>
            </form>

            {error && <p>{error}</p>}
            {search}
            {loading ? (<div>Loading...</div>) : (<div className="movie-grid">
                {movies.map((movie) => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}

            </div>
            )}
        </>
    )
}

export default Home