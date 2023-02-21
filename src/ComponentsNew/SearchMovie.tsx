import React, { useEffect, useState } from 'react'
import { BsCaretLeft, BsCaretRight, BsFillCollectionPlayFill } from 'react-icons/bs'
import { Autoplay, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import Title from './Title'
import { tmdbImageSrc } from '../utils/funtionsUtils'
import { FaHeart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Start from './Home/Start'
import { Film, Genre } from '../interfaces/interface'
import { getGenres, getTopRated } from '../api/tmdbapi'
import Filters from './Filters'

function SearchMovie() {
    const [nextEl, setNextEl] = useState(null)
    const [prevEl, setPrevtEl] = useState(null)

    const [topRatedMovie, setTopRatedMovie] = useState<Film[]>([])
    const [generes, setGeneres] = useState<Genre[]>([])

    const fetchTopRatedMovie = async () => {
        setTopRatedMovie(await (await getTopRated('movie')).films)
    }

    const fetchGenres = async () => {
        setGeneres(await getGenres('movie'))
    }

    const filterMovies = (id: number) => {
        const filter = topRatedMovie.filter((movie) => {
            const resul = movie.genreIds.map((genreId) => genreId === id)
            console.log('Result', resul)
            return resul
        })
        console.log('FilterComplete', filter)
    }

    const classNames =
        'hover:bg-dry transitions text-sm rounded w-8 h-8 flex-colo bg-subMain text-white'

    useEffect(() => {
        fetchTopRatedMovie()
        fetchGenres()
    }, [])

    return (
        <div className='my-16'>
            <Title title='Movie' Icon={BsFillCollectionPlayFill} />
            {/* <Filters gen={generes} filterMovie={filterMovies} /> */}
            <div className='mt-10'>
                <Swiper
                    navigation={{ nextEl, prevEl }}
                    spaceBetween={40}
                    autoplay
                    speed={1000}
                    loop
                    modules={[Navigation, Autoplay]}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        400: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        1024: {
                            slidesPerView: 1,
                        },
                        1280: {
                            slidesPerView: 5,
                            spaceBetween: 30,
                        },
                    }}>
                    {topRatedMovie.map((film, i) => (
                        <SwiperSlide key={film.id}>
                            <div className='p-4 h-rate hovered border border-border bg-dry rounded-lg overflow-hidden'>
                                <img
                                    src={tmdbImageSrc(film.posterPath)}
                                    alt={film.title}
                                    className='w-full h-full object-cover rounded-lg'
                                />
                                <div className='px-4 hoveres gap-6 text-center absolute bg-black bg-opacity-70 top-0 right-0 left-0 bottom-0'>
                                    <button className='w-12 h-12 flex-colo transition hover:bg-subMain rounded-full bg-white bg-opacity-30 text-white'>
                                        <FaHeart />
                                    </button>

                                    <Link
                                        className='font-semibold text-xl trancuted line-clamp-2'
                                        to={`/movie/${film.id}`}>
                                        {film.title}
                                    </Link>

                                    <div className='flex gap-2 text-star'>
                                        <Start vote_average={film.vote_average} />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className='w-full px-1 flex-rows gap-6 pt-12'>
                    <button className={classNames} ref={(node: any) => setPrevtEl(node)}>
                        <BsCaretLeft />
                    </button>

                    <button className={classNames} ref={(node: any) => setNextEl(node)}>
                        <BsCaretRight />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SearchMovie
