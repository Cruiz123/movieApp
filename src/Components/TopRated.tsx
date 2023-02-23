import React, { useState } from 'react'
import { BsBookmarkStarFill, BsCaretLeft, BsCaretRight } from 'react-icons/bs'
import { Autoplay, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import Title from './Title'
import { tmdbImageSrc } from '../utils/funtionsUtils'
import { FaHeart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Start from './Home/Start'
import { Film } from '../interfaces/interface'
import Filters from './Filters'
import { useGenres, useMovies } from '../Hook'

function TopRated() {
    const { topRatedMovie } = useMovies()
    const { genres } = useGenres()

    const [nextEl, setNextEl] = useState(null)
    const [prevEl, setPrevtEl] = useState(null)
    const [filterMovie, setFilterMovie] = useState<Film[]>([])

    const filterMovies = (id: number) => {
        if (id === 0) {
            setFilterMovie(topRatedMovie)
            return
        }
        const filter = topRatedMovie.filter((movie) => {
            const resul = movie.genreIds.find((genreId) => genreId === id)
            if (resul) {
                return resul
            }
        })
        setFilterMovie(filter)
    }
    const classNames =
        'hover:bg-dry transitions text-sm rounded w-8 h-8 flex-colo bg-subMain text-white'

    return (
        <div className='my-16'>
            <Title title='TopRated' Icon={BsBookmarkStarFill} />
            <Filters gen={genres} filterMovie={filterMovies} />
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
                    {filterMovie.map((film, i) => (
                        <SwiperSlide key={i}>
                            <div className='p-4 h-rate hovered border border-border bg-dry rounded-lg overflow-hidden'>
                                <img
                                    src={tmdbImageSrc(film.posterPath)}
                                    alt={film.title}
                                    className='w-full h-full object-center rounded-lg'
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

export default TopRated
