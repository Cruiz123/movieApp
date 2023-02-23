import React, { useEffect, useState } from 'react'
import { BsFillCollectionPlayFill } from 'react-icons/bs'
import { getInTheaters } from '../api/tmdbapi'
import Movie from '../Components/Home/Movie'
import Title from '../Components/Title'
import { Film } from '../interfaces/interface'
import Layout from '../Layouts/Layout'

function FavoriteMovies() {
    const [populars, setPopulars] = useState<Film[]>([])

    const fetchPopulars = async () => {
        const movies = await getInTheaters()
        setPopulars(movies)
    }

    useEffect(() => {
        fetchPopulars()
    }, [])
    return (
        <Layout>
            <div className='container mx-auto min-h-screen px-2 mb-6'>
                <Title title='Favorite Movies' Icon={BsFillCollectionPlayFill} />
                <div className='grid sm:mt-12 mt-6 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10'>
                    {populars.map((film, i) => (
                        <Movie
                            id={film.id}
                            title={film.title}
                            posterPath={film.posterPath}
                        />
                    ))}
                </div>
            </div>
        </Layout>
    )
}

export default FavoriteMovies
