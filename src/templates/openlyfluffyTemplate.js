import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
			<SEO title="{frontmatter.title}" />
			<section id="sec-intro" className="hero lightBg">
				<div className="hero-body">
					<div className="container">
						<h1>{frontmatter.title}</h1>
						<h2>{frontmatter.date}</h2>
						<div
							className="blog-post-content"
							dangerouslySetInnerHTML={{ __html: html }}
						/>
					</div>
				</div>
			</section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`

