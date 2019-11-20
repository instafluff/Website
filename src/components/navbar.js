import React from 'react'
import { Link } from 'gatsby'

import discordIcon from '../assets/icons/discord-brands.svg'
//import hammerIcon from '../assets/icons/hammer-solid.svg'
import instagramIcon from '../assets/icons/instagram-brands.svg'
import twitchIcon from '../assets/icons/twitch-brands.svg'
import youtubeIcon from '../assets/icons/youtube-brands.svg'
import twitterIcon from '../assets/icons/twitter-brands.svg'
import githubAltIcon from '../assets/icons/github-alt-brands.svg'
//import githubIcon from '../assets/icons/github-brands.svg'

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
                  <img src={twitchIcon} alt="Twitch" />
                </span>
              </a>
              <a className="navbar-item" href="http://discord.instafluff.tv/" target="_blank" rel="noopener noreferrer">
                <span className="icon discordIcon">
                  <img src={discordIcon} alt="Discord" />
                </span>
              </a>
              <a className="navbar-item" href="https://www.instagram.com/instafluffTV" target="_blank" rel="noopener noreferrer">
                <span className="icon instagramIcon">
                  <img src={instagramIcon} alt="Instagram" />
                </span>
              </a>
              <a className="navbar-item" href="https://www.youtube.com/channel/UCZQgFekgEhWRH3_iIqeNSDA" target="_blank" rel="noopener noreferrer">
                <span className="icon youtubeIcon">
                  <img src={youtubeIcon} alt="YouTube" />
                </span>
              </a>
              <a className="navbar-item" href="https://twitter.com/instafluffTV" target="_blank" rel="noopener noreferrer">
                <span className="icon twitterIcon">
                  <img src={twitterIcon} alt="Twitter" />
                </span>
              </a>
              <a className="navbar-item" href="https://github.com/instafluff" target="_blank" rel="noopener noreferrer">
                <span className="icon githubIcon">
                  <img src={githubAltIcon} alt="Github" />
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
