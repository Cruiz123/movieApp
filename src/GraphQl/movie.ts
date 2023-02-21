import { gql } from '@apollo/client'

export const BANNER_MOVIES = gql`
    query GetBannerMovies {
        nowPlayingMovies {
            id
            poster_path
            title
            overview
            release_date
        }
    }
`

export const POPULAR_MOVIES = gql`
    query GetPopularMovies {
        popularMovies {
            id
            title
            poster_path
            overview
            release_date
        }
    }
`

export const UPCOMING_MOVIES = gql`
    query GetUpcomingMovies {
        upcomingMovies {
            id
            title
            poster_path
            vote_average
            release_date
        }
    }
`
