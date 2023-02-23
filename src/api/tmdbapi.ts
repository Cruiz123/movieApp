import { AxiosResponse } from 'axios'
import { Cast, Film, Genre } from '../interfaces/interface'
import { axiosClient, formatResult } from '../utils/funtionsUtils'
import { MediaType } from '../utils/types'

export const getTrendings = async (mediaType: MediaType): Promise<Film[]> => {
    try {
      const { data } = await axiosClient.get<
        any,
        AxiosResponse<{
          results: unknown[]
        }>
      >(`/trending/${mediaType}/week`)
  
      return data.results.map((val) => formatResult(val, mediaType))
    } catch (error) {
      console.error(error)
    }
  
    return []
  }

export const getPopulars = async (mediaType: MediaType, page = 1): Promise<Film[]> => {
    try {
        const { data } = await axiosClient.get<
            any,
            AxiosResponse<{
                results: unknown[],
            }>
        >(`/${mediaType}/popular`, {
            params: {
                page,
            },
        })

        return data.results.map((val) => formatResult(val, mediaType))
    } catch (error) {
        console.error(error)
    }

    return []
}

export const getTopRated = async (
    mediaType: MediaType,
    page = 1,
): Promise<{
    films: Film[],
    totalPages: number,
}> => {
    try {
        const { data } = await axiosClient.get<
            any,
            AxiosResponse<{
                results: unknown[],
                total_pages: number,
            }>
        >(`/${mediaType}/top_rated`, {
            params: {
                page,
            },
        })

        return {
            films: data.results.map((val) => formatResult(val, mediaType)),
            totalPages: data.total_pages,
        }
    } catch (error) {
        console.error(error)
    }

    return {
        films: [],
        totalPages: 0,
    }
}

export const getGenres = async (mediaType: MediaType):Promise<Genre[]> => {
    try {
        const { data } = await axiosClient.get<
            any,
            AxiosResponse<{
                genres: unknown[]
            }>
        >(`/genre/${mediaType}/list`)

    return data.genres as Genre[];
    } catch (error) {
        console.error(error)
    }
    return []
 }

 export const getDetail = async (
    mediaType: MediaType,
    id: number
  ): Promise<null | Film> => {
    try {
      const { data } = await axiosClient.get(`/${mediaType}/${id}`)
      return formatResult(data, mediaType)
    } catch (error) {
      console.error(error)
    }
    return null
  }

  export const getCasts = async (
    mediaType: MediaType,
    id: number
  ): Promise<Cast[]> => {
    try {
      const { data } = await axiosClient.get<
        any,
        AxiosResponse<{
          cast: any[]
        }>
      >(`/${mediaType}/${id}/credits`)
  
      return (
        data.cast.map((cast) => ({
          id: cast.id,
          characterName: cast.character,
          name: cast.name,
          profilePath: cast.profile_path,
        })) ?? []
      )
    } catch (error) {
      console.error(error)
    }
  
    return []
  }

  export const getRecommendations = async (
    mediaType: MediaType,
    id: number
  ): Promise<Film[]> => {
    try {
      const { data } = await axiosClient.get<
        any,
        AxiosResponse<{
          results: unknown[]
        }>
      >(`/${mediaType}/${id}/recommendations`)
  
      return data.results.map((val) => formatResult(val, mediaType))
    } catch (error) {
      console.error(error)
    }
  
    return []
  }

  export const getInTheaters = async (): Promise<Film[]> => {
    try {
      const { data } = await axiosClient.get<
        any,
        AxiosResponse<{
          results: unknown[]
        }>
      >(`/movie/now_playing`)
  
      return data.results.map((val) => formatResult(val, 'movie'))
    } catch (error) {
      console.error(error)
    }
  
    return []
  }
