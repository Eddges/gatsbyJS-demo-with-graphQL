import React from 'react'
import Layout from '../components/Layout/Layout'
import classes from '../styles/contact/contact.module.css'

const ContactPage = (props) => {
    return(
        <Layout>
        <div className={classes.Container}>
          <span>Reach me at shivamshekhar.i7@gmail.com</span>
        </div>
      </Layout>
    )
}

export default ContactPage