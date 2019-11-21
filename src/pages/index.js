import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import chatTranslatorImg from '../assets/images/ChatTranslator.png'
import clippyRaidImg from '../assets/images/ClippyRaid.png'

const imageStyle = { borderRadius: '5px' }

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
		<section className="hero">
			<div className="hero-body">
				<div className="container">
					<h1>Welcome to the Comfy Corner!</h1>
					<p className="subtitle">Hello! I'm Instafluff and it is wonderful to see you. I build Twitch-integrated fun with viewers live on Twitch every week.</p>
				</div>
			</div>
		</section>
		<section className="hero">
			<div className="hero-body">
				<div className="container">
					<div className="columns is-multiline">
						<div className="column is-6" key="ChatTranslator">
							<div className="has-text-left">
								<div>
									<img style={imageStyle} src={chatTranslatorImg} alt={""} />
								</div>
								<h2>ChatTranslator</h2>
								<p>Twitch Extension to break down language barriers among viewers!</p>
							</div>
						</div>
						<div className="column is-6" key="ClippyRaid">
							<div className="has-text-left">
								<div>
									<img style={imageStyle} src={clippyRaidImg} alt={""} />
								</div>
								<h2>ClippyRaid</h2>
								<p>Twitch Extension to remove the hassle of highlighting chat text!</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
  </Layout>
)

export default IndexPage
