import React from 'react'
import { FaHeart, FaPlay } from 'react-icons/fa'
// import { Link } from 'react-router-dom'
// import { Film } from '../../interfaces/interface'
import { tmdbImageSrc } from '../../utils/funtionsUtils'
import FlexMovieItems from '../FlexMovieItems'

interface detailsMovie {
    id?: number;
    // mediaType: MediaType
    title: string;
    description: string;
    posterPath: string;
    vote_average?: number;
    release_date: string;
}

function MovieInfo({ title, description, posterPath, release_date }: detailsMovie) {
    return (
        <div className='w-full xl:h-screen relative text-white'>
            <img
                src={tmdbImageSrc(posterPath)}
                alt={title}
                className='w-full hidden xl:inline-block h-full object-cover'
            />

            <div className='xl:bg-main bg-dry flex-colo xl:bg-opacity-90 xl:absolute top-0 left-0 right-0 bottom-0'>
                <div className='container px-3 mx-auto 2xl:px-32 xl:grid grid-cols-3  flex-colo py-10 lg:py-20 gap-8'>
                    <div className='xl:col-span-1 w-full xl:order-none order-last h-header bg-dry border border-gray-800 rounded-lg overflow-hidden'>
                        <img
                            src={tmdbImageSrc(posterPath)}
                            alt={title}
                            className='w-full h-full object-center'
                        />
                    </div>
                    <div className='col-span-2 md:grid grid-cols-5 gap-4 items-center'>
                        <div className='col-span-3 flex flex-col gap-10'>
                            {/** Title */}
                            <h1 className='xl:text-4xl capitalize font-sans text-2xl font-bold'>
                                {title}
                            </h1>
                            {/** Flex Items */}
                            <div className='flex items-center gap-4 font-medium text-dryGray'>
                                <div className='flex-colo bg-subMain text-xs px-2 py-1'>
                                    HD 4K
                                </div>
                                <FlexMovieItems release_date={release_date} />
                            </div>

                            {/** Description */}
                            <p className='text-text text-sm leading-7'>{description}</p>
                            <div className='grid sm:grid-cols-5 grid-cols-3 gap-4 p-6 bg-main border border-gray-800 rounded-lg'>
                                <div className='col-span-1 flex-colo border-r border-border'>
                                    <button className='w-10 h-10 flex-colo rounded-lg bg-white bg-opacity-20'>
                                        <FaHeart />
                                    </button>
                                </div>
                                <div className='sm:col-span-2 col-span-3 flex justify-end font-medium text-sm'>
                                    <button className='bg-dry hover:bg-subMain transition border-2 border-subMain rounded-full flex-rows gap-4 w-full sm:py-3'>
                                        <FaPlay className='w-4 h-4' /> Watch
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieInfo
