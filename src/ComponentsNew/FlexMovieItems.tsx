import React from 'react'
import { FaRegCalendarAlt } from 'react-icons/fa'
// import { Film } from '../interfaces/interface'

interface Props {
    release_date: string;
}

function FlexMovieItems({ release_date }: Props) {
    return (
        <>
            <div className='flex items-center gap-2'>
                <FaRegCalendarAlt className='text-subMain w-6 h-6' />
                <span className='text-xl font-medium'>{release_date}</span>
            </div>
        </>
    )
}

export default FlexMovieItems
