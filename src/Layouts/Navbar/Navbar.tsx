import React from 'react'
import { CgUser } from 'react-icons/cg'
import { FaHeart, FaSearch } from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom'

interface Hover {
    isActive: boolean;
}

function Navbar() {
    const hover = 'hover:text-subMain transition text-white'
    const Hover = ({ isActive }: Hover) => (isActive ? 'text-subMain' : hover)
    return (
        <div className='bg-main shadow-md sticky top-0 z-20'>
            <div className='container mx-auto py-6 px-2 lg:grid gap-10 grid-cols-7 justify-between items-center '>
                <div className='col-span-1 lg:block hidden'>
                    <Link to='/'>
                        <h1 className='sm:text-xl font-bold text-lg'>MovieApp</h1>
                    </Link>
                </div>

                <div className='col-span-3'>
                    <form className='w-full text-sm bg-dryGray rounded flex-btn gap-4'>
                        <button
                            type='submit'
                            className='bg-subMain w-12 flex-colo h-12 rounded text-white'>
                            <FaSearch />
                        </button>

                        <input
                            type='text'
                            placeholder='Search Movie Name from here'
                            className='font-medium placeholder:text-border text-sm w-11/12 h-12 bg-transparent border-none px-2 text-white '
                        />
                    </form>
                </div>

                <div className='col-span-3 font-medium text-sm hidden xl:gap-14 2xl:gap-10 justify-between lg:flex xl:justify-end items-center'>
                    <NavLink to='/tv' className={`${Hover} relative`}>
                        <FaHeart className='w-6 h-6' />
                        <div className='w-5 h-5 flex-colo rounded-full text-xs bg-subMain text-white absolute -top-5 -right-1'>
                            3
                        </div>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navbar
