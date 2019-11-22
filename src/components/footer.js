import React from 'react'
import { Link } from 'gatsby'

import { TwitchSvg } from './svg_icons'
import { DiscordSvg } from './svg_icons'
import { InstagramSvg } from './svg_icons'
import { YoutubeSvg } from './svg_icons'
import { TwitterSvg } from './svg_icons'
import { GithubSvg } from './svg_icons'

import ExternalURLs from './external_urls'

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
								<p className="footer-link-title"><a href={ExternalURLs.FluffyUpdates}>Openly Fluffy Updates</a></p>
								<p className="footer-link"><a href={ExternalURLs.FluffyUpdates}>Openly Fluffy Year of 2018 Recap</a></p>
								<p className="footer-link is-more"><a href={ExternalURLs.FluffyUpdates}>View all posts</a></p>
							</div>
						</div>
						<div className="column is-4" style={footerColumnStyle}>
							<div style={footerSubColumnStyle}>
								<p className="footer-link-title"><a href={ExternalURLs.Twitch}>Coding Cafe</a></p>
								<p className="footer-link"><a href={ExternalURLs.TwitchHighlights}>Highlighted Videos</a></p>
								<p className="footer-link-title"><a href={ExternalURLs.StreamPuppy}>StreamPuppy</a></p>
							</div>
						</div>
						<div className="column is-4" style={footerColumnStyle}>
							<div style={footerSubColumnStyle}>
								<p className="footer-link-title"><Link to="/">Projects and Stuff</Link></p>
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
