import React from 'react'
import classes from './Navbar.module.css'
import { Link, graphql, useStaticQuery } from 'gatsby'

const Navbar = (props) => {

    const title = useStaticQuery(graphql`
        query{
            site{
                siteMetadata{
                    title
                }
            }
        }
    `)

    return(
        <div className={classes.Container}>
            <span className={classes.Author}>{title.site.siteMetadata.title}</span>
            <ul>
                <li><Link exact to="/">Home</Link></li>
                <li><Link exact to="/blog">Blog</Link></li>
                <li><Link exact to="/about">About</Link></li>
                <li><Link exact to="/contact">Contact</Link></li>
            </ul>
        </div>
    )
}

export default Navbar