import React from 'react'
import { Route, Routes } from 'react-router-dom'
import FavoriteMovies from './Screens/FavoriteMovies'
import HomeScreen from './Screens/HomeScreen'
import NotFound from './Screens/NotFound'
import SingleMovie from './Screens/SingleMovie'

function App() {
    return (
        <Routes>
            <Route path='/' element={<HomeScreen />} />
            <Route path='/movie/:id' element={<SingleMovie />} />
            <Route path='/favorites' element={<FavoriteMovies />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    )
}

export default App
