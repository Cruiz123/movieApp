import { BsFillCollectionPlayFill } from 'react-icons/bs'
import { Autoplay, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import Title from './Title'
import { FaSearch } from 'react-icons/fa'
import Movie from './Home/Movie'
import { useMovies } from '../Hook'
import { filterMovie } from '../redux/actions/movie.action'
import { Film } from '../interfaces/interface'
import { connect } from 'react-redux'

const mapStateToProps = (state?: any) => ({
    movie: state.movies,
})

const actionRedux = {
    filterMovie,
}

function SearchMovie({ movie, filterMovie }: any) {
    const { topRatedMovie } = useMovies()

    const handleOnChange = (keyword: string) => {
        if (keyword.length > 0) {
            const filtered = topRatedMovie.filter((movie) =>
                movie.title.toLowerCase().includes(keyword.toLowerCase()),
            )
            filterMovie(filtered)
        } else {
            filterMovie(topRatedMovie)
        }
    }

    return (
        <div className='my-16'>
            <div className='flex flex-row '>
                <Title title='Movie' Icon={BsFillCollectionPlayFill} />
                <div className='col-span-3'>
                    <div className='w-96 text-sm bg-dryGray rounded flex-btn gap-4'>
                        <input
                            onChange={(e) => handleOnChange(e.target.value)}
                            type='text'
                            placeholder='Search Movie Name from here'
                            className='font-medium placeholder:text-border text-sm w-11/12 h-12 bg-transparent border-none px-2 text-white '
                        />
                        <div className='bg-subMain w-12 flex-colo h-12 rounded text-white'>
                            <FaSearch />
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-10'>
                <Swiper
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
                    {topRatedMovie.map((film: Film, i: any) => (
                        <SwiperSlide key={i}>
                            <Movie
                                id={film.id}
                                title={film.title}
                                posterPath={film.posterPath}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default connect(mapStateToProps, actionRedux)(SearchMovie)
