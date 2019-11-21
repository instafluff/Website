import React from 'react'
import { Link } from 'gatsby'

import { TwitchSvg } from './svg_icons'
import { DiscordSvg } from './svg_icons'
import { InstagramSvg } from './svg_icons'
import { YoutubeSvg } from './svg_icons'
import { TwitterSvg } from './svg_icons'
import { GithubSvg } from './svg_icons'

import ExternalURLs from './external_urls'

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
            <Link to="/" className="navbar-item" title="Logo">
              <span className="brandName">Instafluff</span>
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
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
              <Link className="navbar-item" to="/page-2">
                About2
              </Link>
            </div>
            <div className="navbar-end has-text-centered">
              <a className="navbar-item" href={ExternalURLs.Twitch} target="_blank" rel="noopener noreferrer">
                <span className="icon twitchIcon">
									<TwitchSvg />
                </span>
              </a>
              <a className="navbar-item" href={ExternalURLs.Discord} target="_blank" rel="noopener noreferrer">
                <span className="icon discordIcon">
                  <DiscordSvg />
                </span>
              </a>
              <a className="navbar-item" href={ExternalURLs.Instagram} target="_blank" rel="noopener noreferrer">
                <span className="icon instagramIcon">
                  <InstagramSvg />
                </span>
              </a>
              <a className="navbar-item" href={ExternalURLs.Youtube} target="_blank" rel="noopener noreferrer">
                <span className="icon youtubeIcon">
                  <YoutubeSvg />
                </span>
              </a>
              <a className="navbar-item" href={ExternalURLs.Twitter} target="_blank" rel="noopener noreferrer">
                <span className="icon twitterIcon">
                  <TwitterSvg />
                </span>
              </a>
              <a className="navbar-item" href={ExternalURLs.Github} target="_blank" rel="noopener noreferrer">
                <span className="icon githubIcon">
                  <GithubSvg />
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
