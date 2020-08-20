import React from 'react'
import Layout from '../components/Layout/Layout'
import classes from '../styles/index/index.module.css'

const IndexPage = (props) => {
  return(
    <div>
      <Layout>
        <div className={classes.Container}>
          <span>Welcome to the Gatsby Blog</span>
        </div>
      </Layout>
    </div>
  )
}

export default IndexPage