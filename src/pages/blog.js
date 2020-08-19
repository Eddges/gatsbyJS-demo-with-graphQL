import React from 'react'
import Layout from '../components/Layout/Layout'
import classes from '../styles/blog/blog.module.css'
import { graphql, useStaticQuery  } from 'gatsby'

const BlogPage = (props) => {

    // const blogData = useStaticQuery(graphql`
    // query{
    //     allMarkdownRemark{
    //       edges{
    //         node{
    //           frontmatter{
    //             title
    //             date
    //           }
    //           html
    //           excerpt
    //         }
    //       }
    //     }
    //   }
    // `)

    // const blog = blogData.allMarkdownRemark.edges.map((iterator, index) => {
    //     return(
    //         <div className={classes.Post}>
    //             <span className={classes.PostTitle}>{iterator.node.frontmatter.title}</span>
    //             <span className={classes.PostDate}>{iterator.node.frontmatter.date}</span>
    //             <div className={classes.PostContent}>
    //                 <span>{iterator.node.html}</span>
    //             </div>
    //         </div>
    //     )
    // })
    // const Posts = document.querySelector('#Posts')
    // blogData.allMarkdownRemark.edges.map((iterator, index) => {
    //     // return(
    //     //     // <div className={classes.Post}>
    //     //     //     {iterator.node.html}
    //     //     // </div>
    //     // )
    //     Posts.innerHTML = iterator
    // })

    return(
        <div>
            <Layout>
                <div className={classes.Container}>
                    <span className={classes.Welcome}>Welcome to the Blog</span>
                    {/* <button onClick={() => { console.log(blogData.allMarkdownRemark.edges) }}>Click</button> */}
                    <div className={classes.Posts} id="Posts">
                        {/* {blog} */}
                    </div>
                </div>
                
            </Layout>
            
        </div>
    )
}

export default BlogPage