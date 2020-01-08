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

function formatDate(date) {
  var monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];

  var day = date.getUTCDate();
  var monthIndex = date.getUTCMonth();
  var year = date.getUTCFullYear();

  return monthNames[monthIndex] + ' ' + day + ', ' + year;
}

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
								<ul>
									{data.allMarkdownRemark.edges.map(({ node }) => (
										<div key={node.id}>
											<li>{formatDate(new Date(node.frontmatter.date))} - <Link to={node.frontmatter.path}>{node.frontmatter.title}</Link></li>
										</div>
									))}
								</ul>
							</>
						)}
					/>
				</div>
			</div>
		</section>
  </Layout>
)

export default OpenlyFluffy
