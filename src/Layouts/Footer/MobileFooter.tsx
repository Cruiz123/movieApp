import React from 'react'
import { BsCollectionPlay } from 'react-icons/bs'
import { FiHeart } from 'react-icons/fi'
import { NavLink } from 'react-router-dom'

function MobileFooter() {
    const active = 'bg-white text-main'
    const inActive =
        'transition text-2xl flex-colo hover:bg-white hover:text-main text-white rounded-md px-4 py-3'
    const Hover = ({ isActive }: any) => (isActive ? `${active} ${isActive}` : inActive)
    return (
        <>
            <footer className='lg:hidden fixed z-50 bottom-0 w-full px-1'>
                <div className='bg-dry rounded-md flex-btn w-full p-2 px-12'>
                    <NavLink to='/' className={Hover}>
                        <BsCollectionPlay />
                    </NavLink>
                    <NavLink to='/favorite' className={Hover}>
                        <div className='relative'>
                            <div className='w-5 h-5 flex-colo rounded-full text-xs bg-subMain text-white absolute -top-3 -right-1'>
                                3
                            </div>
                            <FiHeart />
                        </div>
                    </NavLink>
                </div>
            </footer>
        </>
    )
}

export default MobileFooter
