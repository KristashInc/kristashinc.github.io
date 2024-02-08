import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import FeatureCard from '../components/feature-card'
import './resources.css'

const Resources = (props) => {
  return (
    <div className="resources-container">
      <Helmet>
        <title>Resources | Kristash</title>
        <meta
          name="description"
          content="Elevate your online presence with Kristash, your trusted digital marketing agency in Omaha, NE. Drive results with expert SEO, PPC, social media, &amp; web design."
        />
        <meta property="og:title" content="Resources | Kristash" />
        <meta
          property="og:description"
          content="Elevate your online presence with Kristash, your trusted digital marketing agency in Omaha, NE. Drive results with expert SEO, PPC, social media, &amp; web design."
        />
      </Helmet>
      <div className="resources-header">
        <header
          data-thq="thq-navbar"
          className="navbarContainer resources-navbar-interactive"
        >
          <a
            href="https://kristash.com"
            id="kristash logo"
            target="_blank"
            rel="noreferrer noopener"
            className="resources-logo logo"
          >
            Kristash
          </a>
          <div data-thq="thq-navbar-nav" className="resources-desktop-menu">
            <nav className="resources-links">
              <Link to="/" className="resources-home bodySmall">
                Home
              </Link>
              <Link to="/faq" className="resources-faq bodySmall">
                FAQ
              </Link>
              <Link
                to="/plans-pricing"
                className="resources-plans-pricing bodySmall"
              >
                Plans &amp; Pricing
              </Link>
              <Link to="/portfolio" className="resources-portfolio bodySmall">
                Portfolio
              </Link>
              <Link to="/resources" className="resources-resources bodySmall">
                Resources
              </Link>
              <Link to="/contact" className="resources-contact bodySmall">
                Contact
              </Link>
            </nav>
            <div className="resources-buttons">
              <button className="resources-login buttonFlat">Login</button>
              <button className="buttonFilled">Register</button>
            </div>
          </div>
          <div data-thq="thq-burger-menu" className="resources-burger-menu">
            <svg viewBox="0 0 1024 1024" className="resources-icon socialIcons">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div
            data-thq="thq-mobile-menu"
            className="resources-mobile-menu1 mobileMenu"
          >
            <div className="resources-nav">
              <div className="resources-top">
                <span className="logo">ONLINE MARKETING AGENCY</span>
                <div data-thq="thq-close-menu" className="resources-close-menu">
                  <svg
                    viewBox="0 0 1024 1024"
                    className="resources-icon02 socialIcons"
                  >
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="resources-links1">
                <Link to="/">Home</Link>
                <Link to="/faq" className="resources-nav4 bodySmall">
                  FAQ
                </Link>
                <Link to="/plans-pricing" className="resources-nav2 bodySmall">
                  Plans &amp; Pricing
                </Link>
                <Link to="/portfolio" className="resources-nav3 bodySmall">
                  Portfolio
                </Link>
                <Link to="/resources" className="resources-nav5 bodySmall">
                  Resources
                </Link>
                <Link to="/contact" className="resources-nav51 bodySmall">
                  Contact
                </Link>
              </nav>
              <div className="resources-buttons1">
                <button className="buttonFlat">Login</button>
                <button className="buttonFilled">Register</button>
              </div>
            </div>
            <div>
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="resources-icon04 socialIcons"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="resources-icon06 socialIcons"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="resources-icon08 socialIcons"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
      </div>
      <div className="resources-hero">
        <div className="resources-hero1 heroContainer">
          <div className="resources-container1">
            <h1 id="resources page" className="resources-hero-heading heading1">
              Resources
            </h1>
            <div className="resources-container2">
              <div className="resources-btn-group">
                <a
                  href="mailto:growmybusiness@kristash.com?subject=Grow My Business!"
                  id="grow my business: email kristash"
                  className="resources-hero-button1 buttonFilled"
                >
                  Grow My Business
                </a>
              </div>
              <Link
                to="/portfolio"
                id="past clients: kristash portfolio"
                className="resources-hero-button2 buttonFlat"
              >
                Past Clients →
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="resources-features">
        <div className="featuresContainer">
          <div
            id="free seo tools from kristash"
            className="resources-features1"
          >
            <div className="resources-container3">
              <span id="kristash: use our" className="overline">
                <span>Use Our</span>
                <br></br>
              </span>
              <h2
                id="free resources"
                className="resources-features-heading heading2"
              >
                Free Resources
              </h2>
              <span className="resources-features-sub-heading bodyLarge">
                <span>
                  <span>
                    <span>
                      We offer a range of services to help your business thrive
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </span>
                <span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </span>
              </span>
            </div>
            <div className="resources-container4">
              <FeatureCard
                heading="SEO Site Audit"
                subHeading="Use our SEO Site Audit tool to evaluate the SEO of your website (or your competitor's) for free!"
              ></FeatureCard>
              <FeatureCard
                heading="Minify Javascript"
                subHeading="Too much unnecessary code takes up valuable space and the time spent loading it is time wasted = customers lost."
              ></FeatureCard>
              <FeatureCard
                heading="Schema"
                subHeading="Unique and memorable logo designs that represent your business."
              ></FeatureCard>
              <FeatureCard
                heading="Company Branding"
                subHeading="Establish yourself online &amp; offline with custom business cards, social media handles, and more!"
              ></FeatureCard>
              <FeatureCard
                heading="SEO &amp; Local SEO"
                subHeading="Optimize your website to improve search engine rankings and increase organic traffic both generally &amp; locally in your area."
              ></FeatureCard>
              <FeatureCard
                heading="Business Coaching"
                subHeading="Expert guidance and strategies to help your business grow and succeed."
              ></FeatureCard>
            </div>
          </div>
        </div>
      </div>
      <div className="resources-banner">
        <div className="bannerContainer resources-banner1">
          <h1
            id="we design, optimize, and coach for success"
            className="resources-banner-heading heading2"
          >
            We Design, Optimize, and Coach for Success
          </h1>
          <Link
            to="/plans-pricing"
            id="learn more"
            className="resources-banner-button buttonFilled"
          >
            Learn More
          </Link>
        </div>
      </div>
      <div className="resources-footer">
        <footer className="footerContainer resources-footer1">
          <div className="resources-container5">
            <a
              href="https://kristash.com"
              id="kristash"
              target="_blank"
              rel="noreferrer noopener"
              className="resources-logo2"
            >
              Kristash
            </a>
            <nav className="resources-nav1 bodySmall resources-nav1">
              <Link to="/" id="home" className="resources-home1 bodySmall">
                Home
              </Link>
              <Link to="/faq" id="faq" className="resources-faq1 bodySmall">
                FAQ
              </Link>
              <Link
                to="/plans-pricing"
                id="plans &amp; pricing"
                className="resources-plans-pricing1 bodySmall"
              >
                Plans &amp; Pricing
              </Link>
              <Link
                to="/portfolio"
                id="portfolio"
                className="resources-portfolio1 bodySmall"
              >
                Portfolio
              </Link>
              <Link
                to="/resources"
                id="resources"
                className="resources-resources1 bodySmall"
              >
                Resources
              </Link>
              <Link
                to="/contact"
                id="contact"
                className="resources-contact1 bodySmall"
              >
                Contact
              </Link>
            </nav>
          </div>
          <div className="resources-separator"></div>
          <div className="resources-container6">
            <span className="resources-text17">
              <span className="bodySmall">
                Copyright © 2024,
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <a
                href="https://kristash.com"
                target="_blank"
                rel="noreferrer noopener"
                className="resources-link"
              >
                Kristash
              </a>
              <span className="bodySmall">. All Rights Reserved.</span>
            </span>
            <div className="resources-icon-group1">
              <a
                href="https://twitter.com/kristashinc"
                className="resources-link1"
              >
                <svg
                  id="twitter icon"
                  viewBox="0 0 950.8571428571428 1024"
                  className="resources-icon10 socialIcons"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
              </a>
              <a
                href="https://instagram.com/kristashinc"
                className="resources-link2"
              >
                <svg
                  id="instagram icon"
                  viewBox="0 0 877.7142857142857 1024"
                  className="resources-icon12 socialIcons"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
              </a>
              <a
                href="https://facebook.com/kristashinc"
                target="_blank"
                rel="noreferrer noopener"
                className="resources-link3"
              >
                <svg
                  id="facebook icon"
                  viewBox="0 0 602.2582857142856 1024"
                  className="resources-icon14 socialIcons"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Resources
