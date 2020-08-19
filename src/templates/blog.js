import React from 'react'
import Layout from '../components/Layout/Layout'
import classes from '../styles/blog/blog.module.css'

const Blog = (props) => {
    return(
            <Layout>
                <div className={classes.Container}>
                    <span>This is a blog template</span>
                </div>
            </Layout>
    )
}

export default Blog