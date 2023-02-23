import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { tmdbImageSrc } from '../utils/funtionsUtils'
import FlexMovieItems from './FlexMovieItems'
import { Link } from 'react-router-dom'
import { FaHeart } from 'react-icons/fa'
import { Film } from '../interfaces/interface'

interface BannerProps {
    trendings: Film[];
}

function Banner({ trendings }: BannerProps) {
    return (
        <div className='relative w-full'>
            <Swiper
                direction='vertical'
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                speed={1000}
                modules={[Autoplay]}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                className='w-full xl:h-96 bg-dry lg:h-64 h-48'>
                {trendings.map((film, i) => (
                    <SwiperSlide
                        key={film.id}
                        className='relative rounded overflow-hidden'>
                        <img
                            src={tmdbImageSrc(film.posterPath)}
                            alt={film.title}
                            className='w-full h-full object-cover'
                        />
                        <div className='absolute linear-bg xl:pl-56 sm:pl-32 pl-8 top-0 bottom-0  right-0 left-0 flex flex-col justify-center lg:gap-8 md:gap-5 gap-4'>
                            <h1 className='xl:text-4xl truncate capitalize font-sans sm:text-2xl text-xl font-bold'>
                                {film.title}
                            </h1>
                            <div className='flex gap-5 items-center text-dryGray'>
                                <FlexMovieItems release_date={film.release_date} />
                            </div>
                            <p className='text-xl line-clamp-3'>{film.description}</p>

                            <div className='flex gap-5 items-center'>
                                <Link
                                    to={`/films/${film.id}`}
                                    className='bg-subMain hover:text-main transition text-white px-8 py-3 rounded font-medium sm:text-sm text-xs'>
                                    Watch
                                </Link>
                                <button className='bg-white hover:text-subMain transition text-white px-4 py-3 rounded text-sm bg-opacity-30'>
                                    <FaHeart />
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
                {/* {!loading && !error ? (
                    <>
                        {data?.nowPlayingMovies.map((movie: Movies) => (
                            <>
                                <SwiperSlide key={movie.id} className='relative rounded overflow-hidden'>
                                    <img
                                        src={tmdbImageSrc(movie.poster_path)}
                                        alt={movie.title}
                                        className='w-full h-full object-cover'
                                    />
                                    <div className='absolute linear-bg xl:pl-56 sm:pl-32 pl-8 top-0 bottom-0  right-0 left-0 flex flex-col justify-center lg:gap-8 md:gap-5 gap-4'>
                                        <h1 className='xl:text-4xl truncate capitalize font-sans sm:text-2xl text-xl font-bold'>
                                            {movie.title}
                                        </h1>
                                        <div className='flex gap-5 items-center text-dryGray'>
                                            <FlexMovieItems release_date={movie.release_date} />
                                        </div>
                                        <div className='flex gap-5 items-center'>
                                            <Link
                                                to={`/movies/${movie.id}`}
                                                className='bg-subMain hover:text-main transition text-white px-8 py-3 rounded font-medium sm:text-sm text-xs'>
                                                Watch
                                            </Link>
                                            <button className='bg-white hover:text-subMain transition text-white px-4 py-3 rounded text-sm bg-opacity-30'>
                                                <FaHeart />
                                            </button>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </>
                        ))}
                    </>
                ) : (
                    ''
                )} */}

                {/* {data.popularMovies.map((movie: Movies, index: Movies) => (
                    <SwiperSlide>
                        <img src={movie.poster_path} alt={movie.title} className='w-full h-full object-cover' />
                    </SwiperSlide>
                ))} */}
            </Swiper>
        </div>
    )
}

export default Banner
