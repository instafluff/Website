import React from 'react'
import { Link } from 'gatsby'

import { TwitchSvg } from './svg_icons'
//import { DiscordSvg } from './svg_icons'
//import { InstagramSvg } from './svg_icons'
//import { YoutubeSvg } from './svg_icons'
import { TwitterSvg } from './svg_icons'
import { GithubSvg } from './svg_icons'
import { HeartSvg } from './svg_icons'

import ExternalURLs from './external_urls'

const iconSocialStyle = { width: '1em', height: '1em', marginLeft: '-2px' }
const sponsorTextStyle = { marginTop: '-2px' }

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar has-shadow is-spaced bd-navbar"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">
              <span className="brandName">Instafluff</span>
            </Link>
						<a title="twitch" className="navbar-item is-hidden-desktop" href={ExternalURLs.Twitch} target="_blank" rel="noopener noreferrer">
							<span className="icon twitchIcon">
								<TwitchSvg />
							</span>
						</a>
						<a title="twitter" className="navbar-item is-hidden-desktop" href={ExternalURLs.Twitter} target="_blank" rel="noopener noreferrer">
							<span className="icon twitterIcon">
								<TwitterSvg />
							</span>
						</a>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
              onKeyDown={() => this.toggleHamburger()}
							role="menu"
							tabIndex={0}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="#sec-codingcafe">Coding Cafe</Link>
              <Link className="navbar-item" to="#sec-projects">Projects</Link>
            </div>
						
            <div className="navbar-end has-text-centered">
              <a title="twitch" className="navbar-item is-hidden-touch" href={ExternalURLs.Twitch} target="_blank" rel="noopener noreferrer">
                <span className="icon twitchIcon">
									<TwitchSvg />
                </span>
              </a>
              <a title="twitter" className="navbar-item is-hidden-touch" href={ExternalURLs.Twitter} target="_blank" rel="noopener noreferrer">
                <span className="icon twitterIcon">
                  <TwitterSvg />
                </span>
              </a>
              <a title="github" className="navbar-item is-hidden-touch" href={ExternalURLs.Github} target="_blank" rel="noopener noreferrer">
                <span className="icon githubIcon">
                  <GithubSvg />
                </span>
              </a>
							
							<div className="navbar-item">
								<a className="button sponsor-button" href={ExternalURLs.GithubSponsor} target="_blank" rel="noopener noreferrer">
									<span className="icon heartIcon" style={iconSocialStyle}>
										<HeartSvg />
									</span>
									<span style={sponsorTextStyle}>Sponsor</span>
								</a>
							</div>
							
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
