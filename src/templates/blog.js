import React from 'react'
import Layout from '../components/Layout/Layout'
import classes from '../styles/blog/blog.module.css'
import { graphql } from 'gatsby'


export const query = graphql`
query (
    $slug :String
  ){
    markdownRemark(
      fields :{
        slug:{
          eq :$slug
        }
      }
    ){
        frontmatter{
        title
        date
      }
        html
    }
  }
`

const Blog = (props) => {
    return(
            <Layout>
                <div className={classes.Container}>
                    <h1>{props.data.markdownRemark.frontmatter.title}</h1>
                    <p>{props.data.markdownRemark.frontmatter.date}</p>
                    <div dangerouslySetInnerHTML={{__html : props.data.markdownRemark.html}} >
                    </div>
                </div>
            </Layout>
    )
}

export default Blog