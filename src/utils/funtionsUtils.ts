import { Film } from '../interfaces/interface'
import { MediaType } from './types'
import axios from 'axios'

export const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_TMDB_API_URL,
})

axiosClient.interceptors.request.use((config) => {
    return {
        ...config,

        params: {
            ...config.params,
            api_key: process.env.REACT_APP_TMDB_API_KEY,
        },
    }
})

export const mergeClassName = (val1: string, val2?: string) => {
    return val1 + ' ' + (val2 || '')
}

export const formatResult = (obj: any, mediaType?: MediaType): Film => {
    return {
        id: obj.id,
        title: obj.title || obj.name,
        description: obj.overview,
        coverPath: obj.backdrop_path,
        posterPath: obj.poster_path,
        genreIds: obj.genre_ids || obj.genres?.map((g: any) => g.id) || [],
        vote_average: obj.vote_average,
        release_date: obj.release_date,
        // mediaType: mediaType || obj.media_type,
        seasons:
            obj.seasons?.map((season: any) => ({
                id: season.id,
                filmName: obj.title,
                name: season.name,
                posterPath: season.poster_path,
                seasonNumber: season.season_number,
                airDate: season.air_date,
                episodes: [],
            })) || [],
    }
}

export const tmdbImageSrc = (path: string) => {
    if (!path) return ''

    return `https://image.tmdb.org/t/p/original/${path}`
}
