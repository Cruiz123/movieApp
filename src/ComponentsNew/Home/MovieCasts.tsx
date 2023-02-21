import React from 'react'
import { FaUserFriends } from 'react-icons/fa'
import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Cast } from '../../interfaces/interface'
import { tmdbImageSrc } from '../../utils/funtionsUtils'
import Title from '../Title'

interface Casts {
    info: Cast[];
}

function MovieCasts({ info }: Casts) {
    return (
        <div className='my-12'>
            <Title title='Casts' Icon={FaUserFriends} />
            <div className='mt-10'>
                <Swiper
                    autoplay={{ delay: 1000, disableOnInteraction: false }}
                    loop
                    speed={1000}
                    modules={[Autoplay]}
                    spaceBetween={10}
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
                    {info.map((cast, i) => (
                        <SwiperSlide key={i}>
                            <div className='w-full p-3 italic text-xs text-text rounded flex-colo bg-dry border border-gray-800 '>
                                <img
                                    src={tmdbImageSrc(cast.profilePath)}
                                    alt={cast.name}
                                    className='w-full h-64 object-cover rounded mb-4 '
                                />
                                <p className='font-semibold'>{cast.name}</p>
                                <p className='opacity-[0.9] text-sm'>
                                    {cast.characterName}
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default MovieCasts
