import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'

import { TwitchSvg } from './svg_icons'
import { DiscordSvg } from './svg_icons'
import { InstagramSvg } from './svg_icons'
import { YoutubeSvg } from './svg_icons'
import { TwitterSvg } from './svg_icons'
import { GithubSvg } from './svg_icons'

import ExternalURLs from './external_urls'

const getMarkdownPosts = graphql`
{
  allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, limit: 1) {
		edges {
      node {
        frontmatter {
          path
          title
        }
      }
    }
  }
}
`

const footerColumnStyle = { padding: '1em 2em' }
const footerSubColumnStyle = { maxWidth: '300px', margin: 'auto' }
const iconSocialStyle = { width: '1em', height: '1em' }

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer">
				<div className="container footer-links">
					<div className="columns">
						<div className="column is-4" style={footerColumnStyle}>
							<div style={footerSubColumnStyle}>
								<p className="footer-link-title"><Link to="/">Home</Link></p>
								<p className="footer-link-title"><Link to="/openly-fluffy">Openly Fluffy Updates</Link></p>
								<StaticQuery
									query={getMarkdownPosts}
									render={data => (
										<>
											{data.allMarkdownRemark.edges.map(({ node }) => (
												<p className="footer-link"><Link to={node.frontmatter.path}>{node.frontmatter.title}</Link></p>
											))}
										</>
									)}
								/>
								<p className="footer-link is-more"><Link to="/openly-fluffy">View all posts</Link></p>
							</div>
						</div>
						<div className="column is-4" style={footerColumnStyle}>
							<div style={footerSubColumnStyle}>
								<p className="footer-link-title"><Link to="#sec-codingcafe">Coding Cafe</Link></p>
								<p className="footer-link"><a href={ExternalURLs.TwitchHighlights} target="_blank" rel="noopener noreferrer">Highlighted Videos</a></p>
								<p className="footer-link-title"><Link to="#sec-twitchextensions">Twitch Extensions</Link></p>
							</div>
						</div>
						<div className="column is-4" style={footerColumnStyle}>
							<div style={footerSubColumnStyle}>
								<p className="footer-link-title"><a href={ExternalURLs.StreamPuppy} target="_blank" rel="noopener noreferrer">StreamPuppy</a></p>
								<p className="footer-link-title"><a href={ExternalURLs.WarmHands} target="_blank" rel="noopener noreferrer">Hand Warmers</a></p>
								<p className="footer-link-title"><a href={ExternalURLs.Cookbook} target="_blank" rel="noopener noreferrer">Mug Cookbook</a></p>
							</div>
						</div>
					</div>
					<div className="social has-text-centered">
              <a title="twitter" href={ExternalURLs.Twitch} target="_blank" rel="noopener noreferrer">
                <span className="icon twitchIcon" style={iconSocialStyle}>
									<TwitchSvg />
                </span>
              </a>
              <a title="discord" href={ExternalURLs.Discord} target="_blank" rel="noopener noreferrer">
                <span className="icon discordIcon" style={iconSocialStyle}>
                  <DiscordSvg />
                </span>
              </a>
              <a title="instagram" href={ExternalURLs.Instagram} target="_blank" rel="noopener noreferrer">
                <span className="icon instagramIcon" style={iconSocialStyle}>
                  <InstagramSvg />
                </span>
              </a>
              <a title="youtube" href={ExternalURLs.Youtube} target="_blank" rel="noopener noreferrer">
                <span className="icon youtubeIcon" style={iconSocialStyle}>
                  <YoutubeSvg />
                </span>
              </a>
              <a title="twitter" href={ExternalURLs.Twitter} target="_blank" rel="noopener noreferrer">
                <span className="icon twitterIcon" style={iconSocialStyle}>
                  <TwitterSvg />
                </span>
              </a>
              <a title="github" href={ExternalURLs.Github} target="_blank" rel="noopener noreferrer">
                <span className="icon githubIcon" style={iconSocialStyle}>
                  <GithubSvg />
                </span>
              </a>
					</div>
					<div className="has-text-centered">
						<p>© Instafluff | <a href="https://www.instafluff.tv">instafluff.tv</a></p>
					</div>
				</div>
      </footer>
    )
  }
}

export default Footer
