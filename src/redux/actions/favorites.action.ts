import { ADDMOVIE, DELETEMOVIE } from './actionsTypes'

export const addFavoriteMovie = (data: any) => (dispatch: any) => {
    dispatch({ type: ADDMOVIE, payload: data })
}

export const deleteMovietoFavorite = () => (dispatch: any) => {
    dispatch({ type: DELETEMOVIE })
}
