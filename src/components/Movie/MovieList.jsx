import { useEffect, useState } from "react"
import style from './style.module.css';
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../reduxtoolkit/slices/movieSlice";

const MovieList = () => {
    const dispatch = useDispatch()
    const { movies, loading, error } = useSelector(state => state.movies)


    useEffect(() => {

        dispatch(fetchMovies())

    }, [dispatch])



    if (loading) return <p>Loading...</p>
    if (error) return <p>{error}</p>


    return (
        <>
            <div className={style['movie_cards']}>
                {movies.map((movie) => {
                    return <div className={style["movie_card"]}>
                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                        <div className={style["movie_content"]}>
                            <h1>{movie.title}</h1>
                            <p>{movie.overview}</p>
                            <button>Watch Now</button>
                        </div>
                    </div>
                })}
            </div>
        </>
    )
}




export default MovieList