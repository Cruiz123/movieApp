import { ADDMOVIE, DELETEMOVIE, FILTERMOVIE } from '../actions/actionsTypes'

const initialState = {
    movies: [],
    movieFilter: [],
}

export default (state = initialState, action: any) => {
    switch (action.type) {
        case ADDMOVIE:
            return {
                ...state,
                movies: action.payload.movies,
            }
        case FILTERMOVIE: {
            return {
                ...state,
                movieFilter: action.payload,
            }
        }
        case DELETEMOVIE:
            return {
                state,
            }
        default: {
            return state
        }
    }
}
