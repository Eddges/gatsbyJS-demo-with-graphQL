import React from 'react'
import '../../styles/Layout.scss'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer'

const Layout = (props) => {
    return(
        <div>
            <Navbar />
            {props.children}
            <Footer />
        </div>
    )
}

export default Layout