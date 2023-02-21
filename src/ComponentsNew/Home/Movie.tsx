import React from 'react'
import { FaHeart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { tmdbImageSrc } from '../../utils/funtionsUtils'

interface films{
    id: number
    title:string
    posterPath: string
}

function Movie({id,title, posterPath }: films) {
    return (
        <div className='p-4 h-rate border border-border hover:scale-95 transition relative rounded-xl overflow-hidden'>
            <Link to={`/movie/${id}`}>
                <img src={tmdbImageSrc(posterPath)} alt={title} className='w-full h-full object-cover rounded-xl' />
            </Link>
            <div className='absolute flex-btn gap-2 bottom-0 right-0 left-0 bg-main bg-opacity-60 text-white px-4 py-3'>
                <h3 className='font-semibold truncate'>{title}</h3>
                <button className='h-9 w-9 text-sm flex-colo transition hover:bg-transparent border-subMain rounded-md bg-subMain text-white'>
                    <FaHeart />
                </button>
            </div>
        </div>
    )
}

export default Movie
