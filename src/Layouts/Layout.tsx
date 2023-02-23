import React, { ReactNode } from 'react'
import Footer from './Footer/Footer'
import MobileFooter from './Footer/MobileFooter'
import Navbar from './Navbar/Navbar'

interface layout {
    children?: ReactNode;
}

function Layout({ children }: layout) {
    return (
        <>
            <div className='bg-main text-white'>
                <Navbar />
                {children}
                <Footer />
                <MobileFooter />
            </div>
        </>
    )
}
export default Layout
