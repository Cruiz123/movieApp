import React, { useCallback, useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { getDetail, getCasts, getRecommendations } from '../api/tmdbapi'
import MovieCasts from '../Components/Home/MovieCasts'
import MovieInfo from '../Components/Home/MovieInfo'
import MovieRecomendations from '../Components/Home/MovieRecomendations'
import { Cast, Film as FilmInterface } from '../interfaces/interface'
import Layout from '../Layouts/Layout'

function SingleMovie() {
    const [film, setFilm] = useState<FilmInterface | null | undefined>(null)
    const [casts, setCasts] = useState<Cast[]>([])
    const [recommendations, setRecommendations] = useState<FilmInterface[]>([])
    const location = useLocation()
    const { id } = useParams()

    const getDetailMovie = useCallback(async () =>{
        try {
            const details = await getDetail('movie',parseInt(id as string))
            if(details) {
                setFilm(details)
            }
        } catch (error) {
            console.log(error)
        }
    },[id])

    const getInfoCasts = useCallback(async () =>{
        try {
            const result = await getCasts('movie',parseInt(id as string)) 

            if(result) {
                setCasts(result)
            }
        } catch (error) {
            
        }
    },[id])

    const getRecomendationsMovies = useCallback(async () =>{
        try {
            const result = await getRecommendations('movie',parseInt(id as string)) 

            if(result) {
                setRecommendations(result)
            }
        } catch (error) {
            
        }
    },[id])

    useEffect(()=>{
        setFilm(undefined)
        getDetailMovie()
        getInfoCasts()
        getRecomendationsMovies()
    },[location,getDetailMovie,getInfoCasts,getRecomendationsMovies])

    return (
        <Layout>
            {
                film &&
            <MovieInfo posterPath={film.posterPath} title={film.title} description={film.description} release_date={film.release_date} />
            }
            <div className="container mx-auto min-h-screen px-2 my-6">
                <MovieCasts info={casts} />
                <MovieRecomendations info={recommendations} />
            </div>
        </Layout>
    )
}

export default SingleMovie
