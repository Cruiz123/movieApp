import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeScreen from './Screens/HomeScreen'
import SingleMovie from './Screens/SingleMovie'

function App() {
    return (
        <Routes>
            <Route path='/' element={<HomeScreen />} />
            <Route path='/movie/:id' element={<SingleMovie />} />
        </Routes>
    )
}

export default App
