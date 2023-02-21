import React, { useEffect, useState } from 'react'
import Title from './Title'
import { BsCollectionFill } from 'react-icons/bs'
import Movie from './Home/Movie'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
import { Film } from '../interfaces/interface'
import { getInTheaters } from '../api/tmdbapi'

function PopularMovies() {
    const [populars, setPopulars] = useState<Film[]>([])

    const fetchPopulars = async () => {
        const movies = await getInTheaters()
        setPopulars(movies)
    }

    useEffect(() => {
        fetchPopulars()
    }, [])

    return (
        <div className='my-16'>
            <Title title='Popular Movies' Icon={BsCollectionFill} />
            <Swiper
                direction='horizontal'
                spaceBetween={10}
                loop={true}
                speed={1000}
                modules={[Autoplay]}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
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
                }}
                className='w-full mt-4'>
                {populars.map((film, i) => (
                    <SwiperSlide key={film.id}>
                        <Movie
                            id={film.id}
                            title={film.title}
                            posterPath={film.posterPath}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default PopularMovies
