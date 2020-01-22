import React from "react"
import { graphql } from "gatsby"
//import PozadinskaSlika from "../components/pozadinskaslika"
//import SEO from "../components/seo"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"
import BlogNav, { leftArrow, rightArrow } from "../components/blog-navigation"
import "../styles/style.css"
import IzvjestajiStyle from "../styles/izvjestaji.module.css"

export default ({ pageContext, data }) => {
  const { post } = data
  const { previous, next } = pageContext

  return (
    <Layout>
      <div style={{ margin: "0 auto", maxWidth: 1000 }}>
        <div style={{ textAlign: "center" }}>
          <h1 style={{ marginTop: 50 }}>{post.frontmatter.title}</h1>
          <span
            style={{ fontWeight: "400", fontSize: "1.1em", color: "#a0aec0" }}
          >
            Objavio {post.frontmatter.author}, {post.frontmatter.date}
          </span>
        </div>
        <div style={{ marginTop: 20 }}>
          <MDXRenderer>{post.body}</MDXRenderer>
        </div>
      </div>

      <BlogNav>
        <BlogNav.Previous>
          {previous && (
            <BlogNav.Link to={`/izvjestaji/${previous.frontmatter.slug}`}>
              {leftArrow} Prethodni izvještaj
            </BlogNav.Link>
          )}
        </BlogNav.Previous>

        <BlogNav.Next>
          {next && (
            <BlogNav.Link to={`/izvjestaji/${next.frontmatter.slug}`}>
              <span>Sljedeći izvještaj {rightArrow}</span>
            </BlogNav.Link>
          )}
        </BlogNav.Next>
      </BlogNav>
    </Layout>
  )
}

export const query = graphql`
  query BlogPost($slug: String!) {
    post: mdx(frontmatter: { slug: { eq: $slug } }) {
      id
      frontmatter {
        author
        date(formatString: "MMMM DD, YYYY")
        description
        slug
        title
      }
      body
    }
  }
`