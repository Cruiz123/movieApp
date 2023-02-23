import React from 'react'
import Banner from '../Components/Banner'
import PopularMovies from '../Components/PopularMovies'
import SearchMovie from '../Components/SearchMovie'
import TopRated from '../Components/TopRated'
import { useMovies } from '../Hook'
import Layout from '../Layouts/Layout'

function HomeScreen() {
    const { trendings } = useMovies()
    return (
        <>
            <Layout>
                <div className='container mx-auto min-h-screen px-2 mb-6'>
                    <Banner trendings={trendings} />
                    <PopularMovies />
                    <TopRated />
                    <SearchMovie />
                </div>
            </Layout>
        </>
    )
}

export default HomeScreen
