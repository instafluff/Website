import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const getMarkdownPosts = graphql`
{
  allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}) {
		totalCount
    edges {
      node {
        frontmatter {
					date
          path
          title
        }
      }
    }
  }
}
`

const OpenlyFluffy = () => (
  <Layout>
    <SEO title="Openly Fluffy Updates" />
		<section id="sec-intro" className="hero lightBg">
			<div className="hero-body">
				<div className="container">
					<h1>Openly Fluffy Updates</h1>
					<StaticQuery
						query={getMarkdownPosts}
						render={data => (
							<>
								<h4>{data.allMarkdownRemark.totalCount} posts</h4>
								{data.allMarkdownRemark.edges.map(({ node }) => (
									<div key={node.id}>
										<h4>{(new Date(node.frontmatter.date)).toLocaleDateString("en-US")} - <Link to={node.frontmatter.path}>{node.frontmatter.title}</Link></h4>
									</div>
								))}
							</>
						)}
					/>
				</div>
			</div>
		</section>
  </Layout>
)

export default OpenlyFluffy
