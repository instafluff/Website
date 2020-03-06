import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import chatTranslatorImg from '../assets/images/ChatTranslator.png'
import clippyRaidImg from '../assets/images/ClippyRaid.png'
import comfyCafeImg from '../assets/images/CoverPhoto.png'
import coronavirusImg from '../assets/images/coronavirus.png'
import sleeplessStardewImg from '../assets/images/sleeplessinstardew.png'
import readgoodImg from '../assets/images/readgood.png'
import cookbookImg1 from '../assets/images/spellbookCover.jpg'
import cookbookImg2 from '../assets/images/spellbookSpread2.jpg'

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
					<p className="subtitle">Hello! I'm Instafluff®, the Comfiest Coder and Mug Chef on Twitch and we are all about getting more comfy with ourselves and the world around us.</p>
					<p className="subtitle">We gather on <a href="https://twitch.tv/instafluff">Twitch</a> every Wed/Thu/Fri (WTF) and hang out in <a href="http://discord.instafluff.tv">Discord</a> outside of that schedule.</p>
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
							<p>Wed/Thu/Fri (spells WTF!) at 8am PST</p>
							<a className="button is-danger is-rounded" style={buttonStyle} href={ExternalURLs.Twitch} target="_blank" rel="noopener noreferrer">
								Visit Instafluff's Channel
							</a>
						</div>
						<div className="column" key="CodingCafe">
							<div className="has-text-centered">
								{/* <img style={imageStyle} src={comfyCafeImg} alt={""} /> */}
								<iframe
									src="https://player.twitch.tv/?channel=instafluff&muted=true"
									height="360"
									width="640"
									frameborder="0"
									scrolling="no"
									allowfullscreen="true">
								</iframe>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section id="sec-projects" className="hero lightBg">
			<div className="hero-body">
				<div className="container">
					<h2>Some of My Popular Projects</h2>
					<p className="subtitle">My projects are available open-source on <a href="https://github.com/instafluff">GitHub</a>!<br/>If you find them useful, please consider financially supporting my work by becoming a <a href="https://github.com/sponsors/instafluff">Comfy Sponsor</a>!</p>
					<div className="columns is-multiline">
						<div className="column is-6">
							<h3>ComfyJS</h3>
							<p><a href="https://github.com/instafluff/ComfyJS">JavaScript library for Twitch Chat</a></p>
							<iframe width="480" height="270" src="https://www.youtube.com/embed/oXpPwnUQCCk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
						</div>
						<div className="column is-6">
							<h3>COVID-19 Tracker</h3>
							<p><a href="https://github.com/instafluff/Coronavirus">Real-time COVID-19 Coronavirus Stats</a></p>
							<img style={imageStyle} src={coronavirusImg} alt={""} />
						</div>
						<div className="column is-6">
							<h3>Sleepless in Stardew</h3>
							<p><a href="https://github.com/instafluff/SleeplessInStardew">The Late-Night Get-More-Done Sleep-less Insomniac Stardew Valley Mod</a></p>
							<img style={imageStyle} src={sleeplessStardewImg} alt={""} />
						</div>
						<div className="column is-6">
							<h3>ReadGood</h3>
							<p><a href="https://github.com/instafluff/ReadGood">The dyslexia-friendly easy-to-read Twitch chat reader</a></p>
							<img style={imageStyle} src={readgoodImg} alt={""} />
						</div>
					</div>
				</div>
			</div>
		</section>
		<section id="sec-cookbook" className="hero lightBg">
			<div className="hero-body">
				<div className="container">
					<h2>The Comfy Mug Chef's Spellbook!</h2>
					<p className="subtitle">My best-selling book! :D<br/>A mug cookbook created with <a href="https://www.julieokahara.com">Julie Okahara</a> designed for families and kids of all ages.</p>
					<a className="button is-danger is-rounded" style={buttonStyle} href="http://cookbook.instafluff.tv" target="_blank" rel="noopener noreferrer">
						Ooh, I want a copy!
					</a>
					<br/><br/>
					<div className="columns is-multiline">
						<div className="column is-4">
							<img style={imageStyle} src={cookbookImg1} alt={""} />
						</div>
						<div className="column is-8">
							<img style={imageStyle} src={cookbookImg2} alt={""} />
						</div>
					</div>
				</div>
			</div>
		</section>
		<section id="sec-twitchextensions" className="hero">
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
										View ChatTranslator
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
										View ClippyRaid
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
