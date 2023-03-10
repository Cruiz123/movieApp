import { ADDMOVIE, DELETEMOVIE } from '../actions/actionsTypes'

const initialState = {
    movies: [],
}

export default (state = initialState, action: any) => {
    switch (action.type) {
        case ADDMOVIE:
            return {
                ...state,
                movies: action.payload.movies,
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
