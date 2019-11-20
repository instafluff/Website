import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import chatTranslatorImg from '../assets/images/ChatTranslator.png'
import clippyRaidImg from '../assets/images/ClippyRaid.png'

const imageDivStyle = { width: '240px', display: 'inline-block' }
const imageStyle = { borderRadius: '5px' }

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
			<section className="section section--gradient">
				<div className="container">
					<div className="section">
						<div className="columns">
							<div className="column is-10 is-offset-1">
								<div className="content">
									<div className="content">
										<div className="tile">
											<h1 className="title">Welcome to the Comfy Corner!</h1>
										</div>
										<div className="tile">
											<h3 className="subtitle">Hello! I'm Instafluff and it is wonderful to see you. I build Twitch-integrated fun with viewers live on Twitch every week.</h3>
										</div>
									</div>
									
									<div className="columns is-multiline">
										<div key="ChatTranslator" className="column is-6">
											<section className="section">
												<div className="has-text-centered">
													<div style={imageDivStyle}>
														<img style={imageStyle} src={chatTranslatorImg} alt={""} />
													</div>
												</div>
												<p>Twitch Extension to break down language barriers among viewers!</p>
											</section>
										</div>
										<div key="ClippyRaid" className="column is-6">
											<section className="section">
												<div className="has-text-centered">
													<div style={imageDivStyle}>
														<img style={imageStyle} src={clippyRaidImg} alt={""} />
													</div>
												</div>
												<p>Twitch Extension to remove the hassle of highlighting chat text!</p>
											</section>
										</div>
									</div>
									
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
  </Layout>
)

export default IndexPage
