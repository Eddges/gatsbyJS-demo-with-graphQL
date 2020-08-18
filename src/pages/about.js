import React from 'react'
import { Link } from 'gatsby'

const AboutPage = (props) => {
    return(
        <div>
            <p>This is the about page! Wooohooo</p>
            <Link to="/contact">Contact me</Link>
        </div>
    )
}

export default AboutPage