import React from 'react'
import { Link } from 'gatsby'

import { TwitchSvg } from './svg_icons'
import { DiscordSvg } from './svg_icons'
import { InstagramSvg } from './svg_icons'
import { YoutubeSvg } from './svg_icons'
import { TwitterSvg } from './svg_icons'
import { GithubSvg } from './svg_icons'

const brandNameStyle = { color: '#fff', fontFamily: 'Bubblegum Sans', fontSize: '32px', fontWeight: 400 }

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
              <span style={brandNameStyle}>Instafluff</span>
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
              <a className="navbar-item" href="https://www.twitch.tv/instafluff" target="_blank" rel="noopener noreferrer">
                <span className="icon twitchIcon">
									<TwitchSvg />
                </span>
              </a>
              <a className="navbar-item" href="http://discord.instafluff.tv/" target="_blank" rel="noopener noreferrer">
                <span className="icon discordIcon">
                  <DiscordSvg />
                </span>
              </a>
              <a className="navbar-item" href="https://www.instagram.com/instafluffTV" target="_blank" rel="noopener noreferrer">
                <span className="icon instagramIcon">
                  <InstagramSvg />
                </span>
              </a>
              <a className="navbar-item" href="https://www.youtube.com/channel/UCZQgFekgEhWRH3_iIqeNSDA" target="_blank" rel="noopener noreferrer">
                <span className="icon youtubeIcon">
                  <YoutubeSvg />
                </span>
              </a>
              <a className="navbar-item" href="https://twitter.com/instafluffTV" target="_blank" rel="noopener noreferrer">
                <span className="icon twitterIcon">
                  <TwitterSvg />
                </span>
              </a>
              <a className="navbar-item" href="https://github.com/instafluff" target="_blank" rel="noopener noreferrer">
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
