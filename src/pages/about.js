import React from 'react'
import Layout from '../components/Layout/Layout'
import classes from '../styles/about/about.module.css'

const AboutPage = (props) => {
    return(
        <Layout>
        <div className={classes.Container}>
          <span>This is the About page</span>
        </div>
      </Layout>
    )
}

export default AboutPage