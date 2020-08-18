import React from 'react'
import { Link } from 'gatsby'
import Footer from '../components/Footer'

const AboutPage = (props) => {
    return(
        <div>
            <p>This is the about page! Wooohooo</p>
            <Link to="/contact">Contact me</Link>
            <Footer />
        </div>
    )
}

export default AboutPage