import { ADDMOVIE, FILTERMOVIE } from './actionsTypes'

export const addMovies = (data: any) => (dispatch: any) => {
    dispatch({ type: ADDMOVIE, params: data })
}

export const filterMovie = (data: any) => (dispatch: any) => {
    dispatch({
        type: FILTERMOVIE,
        params: data,
    })
}
