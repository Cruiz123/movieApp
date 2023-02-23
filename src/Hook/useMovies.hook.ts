import { useCallback, useEffect, useState } from 'react'
import { getInTheaters, getTopRated, getTrendings } from '../api/tmdbapi'
import { Film } from '../interfaces/interface'
import { addMovies, filterMovie } from '../redux/actions/movie.action'

const useMovies = () => {
    const [loading, setLoading] = useState(false)
    const [movie, setMovie] = useState<Film[]>([])
    const [trendings, setTrendings] = useState<Film[]>([])
    const [topRatedMovie, setTopRatedMovie] = useState<Film[]>([])

    const fetchMovieNowPlaying = useCallback(async () => {
        try {
            setLoading(true)
            const movies = await getInTheaters()
            setMovie(movies)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }, [])

    const fetchMovieTopRated = useCallback(async () => {
        const movie = await (await getTopRated('movie')).films
        console.log('MovieGet', movie)
        filterMovie(movie)
        addMovies(movie)
        setTopRatedMovie(movie)
    }, [])

    const fetchMovieTrending = useCallback(async () => {
        try {
            setLoading(true)
            const movies = await getTrendings('movie')
            setTrendings(movies)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }, [])

    useEffect(() => {
        fetchMovieNowPlaying()
        fetchMovieTopRated()
        fetchMovieTrending()
    }, [])

    return { movie, loading, topRatedMovie, trendings }
}

export default useMovies
