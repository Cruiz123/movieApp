import React from 'react'
import { BsCollectionFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Film } from '../../interfaces/interface'
import { tmdbImageSrc } from '../../utils/funtionsUtils'
import Title from '../Title'

interface Recomendation {
    info: Film[];
}

function MovieRecomendations({ info }: Recomendation) {
    return (
        <div className='my-16'>
            <Title title='Recomendations' Icon={BsCollectionFill} />
            <div className='my-10'>
                <Swiper
                    spaceBetween={10}
                    autoplay
                    speed={1000}
                    loop
                    modules={[Autoplay]}
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
                        },
                    }}>
                    {info.map((film, i) => (
                        <SwiperSlide key={i}>
                            <div className='w-full p-3 italic text-xs text-text rounded flex-colo border border-gray-800 '>
                                <Link to={`/movie/${film.id}`}>
                                    <img
                                        src={tmdbImageSrc(film.posterPath)}
                                        alt={film.title}
                                        className='w-full h-full object-center rounded-xl'
                                    />
                                </Link>
                                <div className='absolute flex-btn gap-2 bottom-0 right-0 left-0 bg-main bg-opacity-60 text-white px-4 py-3'>
                                    <h3 className='font-semibold truncate'>
                                        {film.title}
                                    </h3>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default MovieRecomendations
