import React from 'react'
import { Link } from 'gatsby'

import { InstagramSvg } from './svg_icons'
import { TwitterSvg } from './svg_icons'

import ExternalURLs from './external_urls'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="content has-text-centered">
          <div className="container has-text-white-ter">
            <div className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        About
                      </Link>
                    </li>
                    <li>
                      <a
                        className="navbar-item"
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Admin
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/blog">
                        Latest Stories
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4 social">
                <a title="twitter" href={ExternalURLs.Twitter}>
                  <div className="icon twitterIcon" style={{ width: '1em', height: '1em' }}>
										<TwitterSvg />
									</div>
                </a>
                <a title="instagram" href={ExternalURLs.Instagram}>
                  <div className="icon instagramIcon" style={{ width: '1em', height: '1em' }}>
										<InstagramSvg />
									</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
