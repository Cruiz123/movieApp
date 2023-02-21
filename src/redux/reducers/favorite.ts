import { ADDMOVIE, DELETEMOVIE } from '../actions/actionsTypes'

const initialState = {
    id: '',
    title: '',
    description: '',
    posterPath: '',
    coverPath: '',
    genreIds: [],
    release_date: '',
}

export default (state = initialState, action: any) => {
    switch (action.type) {
        case ADDMOVIE:
            return {
                ...state,
                id: action.payload.id,
                title: action.payload.title,
                description: action.payload.description,
                posterPath: action.payload.posterPath,
                coverPath: action.payload.coverPath,
                genreIds: action.payload.genreIds,
                release_date: action.payload.release_date,
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
