import React from 'react'
import Layout from '../components/Layout/Layout'
import classes from '../styles/blog/blog.module.css'
import { graphql, useStaticQuery, Link  } from 'gatsby'

const BlogPage = (props) => {

    const query = useStaticQuery(graphql`
        query{
            allMarkdownRemark{
            edges{
                node{
                    frontmatter{
                        title
                        date
                    }
                    html
                    fields{
                        slug
                    }
                }
            }
            }
        }
    `)

    const blogPosts = query.allMarkdownRemark.edges.map(edge => {
                        return(
                            
                            <div className={classes.Post}>
                                <Link to={`/blog/${edge.node.fields.slug}`}>
                                <span className={classes.PostTitle}>{edge.node.frontmatter.title}</span>
                                <span className={classes.PostDate}>{edge.node.frontmatter.date}</span>
                                </Link>
                            </div>
                        )
                            
                        })
    

    return(
        <div>
            <Layout>
                <div className={classes.Container}>
                    <span className={classes.Welcome}>Blogs</span>
                    {blogPosts}
                </div>
                
            </Layout>
            
        </div>
    )
}

export default BlogPage