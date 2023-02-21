import React from 'react'
import Banner from '../ComponentsNew/Banner'
import PopularMovies from '../ComponentsNew/PopularMovies'
import SearchMovie from '../ComponentsNew/SearchMovie'
import TopRated from '../ComponentsNew/TopRated'
import Layout from '../Layouts/Layout'

function HomeScreen() {
    return (
        <>
            <Layout>
                <div className='container mx-auto min-h-screen px-2 mb-6'>
                    <Banner />
                    <PopularMovies />
                    <TopRated />
                    <SearchMovie />
                </div>
            </Layout>
        </>
    )
}

export default HomeScreen
