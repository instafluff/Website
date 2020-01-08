import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import chatTranslatorImg from '../assets/images/ChatTranslator.png'
import clippyRaidImg from '../assets/images/ClippyRaid.png'
import comfyCafeImg from '../assets/images/CoverPhoto.png'

import ExternalURLs from '../components/external_urls'

const imageStyle = { borderRadius: '5px', marginBottom: '12px' }
const buttonStyle = { marginTop: '12px' }
const cardSubColumnStyle = { maxWidth: '300px', margin: 'auto' }

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
		<section id="sec-intro" className="hero">
			<div className="hero-body">
				<div className="container">
					<h1>Welcome to the Comfy Corner!</h1>
					<p className="subtitle">Hello! I'm Instafluff and it is wonderful to see you. I build Twitch-integrated fun with viewers live on Twitch every week.</p>
				</div>
			</div>
		</section>
		<section id="sec-codingcafe" className="hero lightBg">
			<div className="hero-body">
				<div className="container">
					<div className="columns">
						<div className="column is-4">
							<h2>Coding Cafe</h2>
							<p>Come and relax in the Comfiest Corner of Twitch</p>
							<p>Wed/Thu/Fri at 9am PST</p>
							<a className="button is-danger is-rounded" style={buttonStyle} href={ExternalURLs.Twitch} target="_blank" rel="noopener noreferrer">
								Go to Stream
							</a>
						</div>
						<div className="column" key="CodingCafe">
							<div className="has-text-centered">
								<img style={imageStyle} src={comfyCafeImg} alt={""} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section id="sec-projects" className="hero">
			<div className="hero-body">
				<div className="container">
					<h2>Twitch Extensions</h2>
					<p className="subtitle">Extensions that you can add to your Twitch channel!</p>
					<div className="columns is-multiline">
						<div className="column" key="ChatTranslator">
							<div style={cardSubColumnStyle}>
								<div className="has-text-left">
									<div>
										<img style={imageStyle} src={chatTranslatorImg} alt={""} />
									</div>
									<h3>ChatTranslator</h3>
									<p>Twitch Extension to break down language barriers among viewers!</p>
									<a className="button is-danger is-rounded" style={buttonStyle} href={ExternalURLs.ChatTranslator} target="_blank" rel="noopener noreferrer">
										Open Page
									</a>
								</div>
							</div>
						</div>
						<div className="column" key="ClippyRaid">
							<div style={cardSubColumnStyle}>
								<div className="has-text-left">
									<div>
										<img style={imageStyle} src={clippyRaidImg} alt={""} />
									</div>
									<h3>ClippyRaid</h3>
									<p>Twitch Extension to remove the hassle of highlighting chat text!</p>
									<a className="button is-danger is-rounded" style={buttonStyle} href={ExternalURLs.ClippyRaid} target="_blank" rel="noopener noreferrer">
										Open Page
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
  </Layout>
)

export default IndexPage
