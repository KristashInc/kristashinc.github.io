import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import FeatureCard from '../components/feature-card'
import './plans-pricing.css'

const PlansPricing = (props) => {
  return (
    <div className="plans-pricing-container">
      <Helmet>
        <title>Plans & Pricing | Kristash</title>
        <meta
          name="description"
          content="Elevate your online presence with Kristash, your trusted digital marketing agency in Omaha, NE. Drive results with expert SEO, PPC, social media, &amp; web design."
        />
        <meta property="og:title" content="Plans &amp; Pricing | Kristash" />
        <meta
          property="og:description"
          content="Elevate your online presence with Kristash, your trusted digital marketing agency in Omaha, NE. Drive results with expert SEO, PPC, social media, &amp; web design."
        />
      </Helmet>
      <div className="plans-pricing-header">
        <header
          data-thq="thq-navbar"
          className="navbarContainer plans-pricing-navbar-interactive"
        >
          <a
            href="https://kristash.com"
            target="_blank"
            rel="noreferrer noopener"
            className="plans-pricing-logo logo"
          >
            Kristash
          </a>
          <div data-thq="thq-navbar-nav" className="plans-pricing-desktop-menu">
            <nav className="plans-pricing-links">
              <Link to="/" className="plans-pricing-home bodySmall">
                Home
              </Link>
              <Link to="/faq" className="plans-pricing-faq bodySmall">
                FAQ
              </Link>
              <Link
                to="/plans-pricing"
                className="plans-pricing-plans-pricing bodySmall"
              >
                Plans &amp; Pricing
              </Link>
              <Link
                to="/portfolio"
                className="plans-pricing-portfolio bodySmall"
              >
                Portfolio
              </Link>
              <Link
                to="/resources"
                className="plans-pricing-resources bodySmall"
              >
                Resources
              </Link>
              <span className="plans-pricing-contact bodySmall">Contact</span>
            </nav>
            <div className="plans-pricing-buttons">
              <button className="plans-pricing-login buttonFlat">Login</button>
              <button className="buttonFilled">Register</button>
            </div>
          </div>
          <div data-thq="thq-burger-menu" className="plans-pricing-burger-menu">
            <svg
              viewBox="0 0 1024 1024"
              className="plans-pricing-icon socialIcons"
            >
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div
            data-thq="thq-mobile-menu"
            className="plans-pricing-mobile-menu1 mobileMenu"
          >
            <div className="plans-pricing-nav">
              <div className="plans-pricing-top">
                <span className="logo">ONLINE MARKETING AGENCY</span>
                <div
                  data-thq="thq-close-menu"
                  className="plans-pricing-close-menu"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    className="plans-pricing-icon02 socialIcons"
                  >
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="plans-pricing-links1">
                <Link to="/">Home</Link>
                <Link to="/faq" className="plans-pricing-nav4 bodySmall">
                  FAQ
                </Link>
                <Link
                  to="/plans-pricing"
                  className="plans-pricing-nav2 bodySmall"
                >
                  Plans &amp; Pricing
                </Link>
                <Link to="/portfolio" className="plans-pricing-nav3 bodySmall">
                  Portfolio
                </Link>
                <Link to="/resources" className="plans-pricing-nav5 bodySmall">
                  Resources
                </Link>
                <Link to="/contact" className="plans-pricing-nav51 bodySmall">
                  Contact
                </Link>
              </nav>
              <div className="plans-pricing-buttons1">
                <button className="buttonFlat">Login</button>
                <button className="buttonFilled">Register</button>
              </div>
            </div>
            <div>
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="plans-pricing-icon04 socialIcons"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="plans-pricing-icon06 socialIcons"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="plans-pricing-icon08 socialIcons"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
      </div>
      <div className="plans-pricing-hero">
        <div className="plans-pricing-hero1 heroContainer">
          <div className="plans-pricing-container01">
            <h1 className="plans-pricing-hero-heading heading1">
              Plans &amp; Pricing
            </h1>
            <span className="plans-pricing-hero-sub-heading bodyLarge">
              <span>
                <span>
                  <span>
                    Boost your online presence with our professional services
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
        </div>
      </div>
      <div className="plans-pricing-pricing pricingContainer">
        <div className="plans-pricing-container02">
          <h2 className="heading2">A Custom Website for Your Business</h2>
          <span className="plans-pricing-pricing-sub-heading bodyLarge">
            <span>
              <span>
                We offer flexible pricing options to meet your specific needs
              </span>
            </span>
          </span>
        </div>
        <div className="plans-pricing-container03">
          <div className="freePricingCard plans-pricing-pricing-card">
            <div className="plans-pricing-container04">
              <span className="plans-pricing-text16 heading3">Portfolio</span>
              <span className="bodySmall">
                A basic website for an artist or musician that wants to showcase
                their art/music.
              </span>
            </div>
            <div className="plans-pricing-container05">
              <span className="plans-pricing-text17">
                <span>$</span>
                <span></span>
              </span>
              <span className="plans-pricing-free-plan-price">597</span>
            </div>
            <div className="plans-pricing-container06">
              <span className="plans-pricing-text20">✔</span>
              <div className="plans-pricing-container07">
                <div className="plans-pricing-container08">
                  <span className="plans-pricing-text21">✔</span>
                  <span className="bodySmall">Base Website design</span>
                </div>
                <div className="plans-pricing-container09">
                  <span className="plans-pricing-text22">✔</span>
                  <span className="bodySmall">Basic Logo design</span>
                </div>
                <div className="plans-pricing-container10">
                  <span className="plans-pricing-text23">✔</span>
                  <span className="bodySmall">Basic SEO</span>
                </div>
                <span className="bodySmall">
                  Headless CMS integration for adding/updating website content
                </span>
                <div className="plans-pricing-container11">
                  <span className="plans-pricing-text24">✔</span>
                  <span className="bodySmall">Business Consultation</span>
                </div>
              </div>
            </div>
            <button className="plans-pricing-button buttonOutline">
              Continue with a PORTFOLIO site
            </button>
          </div>
          <div className="basicPricingCard plans-pricing-pricing-card1">
            <div className="plans-pricing-container12">
              <span className="plans-pricing-text25 heading3">
                Professional
              </span>
              <span className="bodySmall">
                An affordable SEO-optimized website for small businesses that
                are primarily service-based. (Tattoo artists, barbers, cleaners,
                chiropractors, holistic health practitioners; etc.)
              </span>
            </div>
            <div className="plans-pricing-container13">
              <span className="plans-pricing-text26">
                <span>$</span>
                <span></span>
              </span>
              <span className="plans-pricing-basic-plan-pricing">897</span>
            </div>
            <div className="plans-pricing-container14">
              <div className="plans-pricing-container15">
                <span className="plans-pricing-text29">✔</span>
                <span className="bodySmall">
                  All features of PORTFOLIO site, PLUS:
                </span>
              </div>
              <div className="plans-pricing-container16">
                <span className="plans-pricing-text31">✔</span>
                <span>Take appointments via a Booking Plugin</span>
              </div>
              <div className="plans-pricing-container17">
                <span className="plans-pricing-text32">✔</span>
                <span className="bodySmall">Advanced SEO</span>
              </div>
              <div className="plans-pricing-container18">
                <span className="plans-pricing-text33">✔</span>
                <span className="bodySmall">
                  Business coaching ZOOM session (2x)
                </span>
              </div>
            </div>
            <button className="plans-pricing-button1 buttonFilledSecondary">
              Build me a PROFESSIONAL website
            </button>
          </div>
          <div className="proPricingCard plans-pricing-pricing-card2">
            <div className="plans-pricing-container19">
              <span className="plans-pricing-text34 heading3">
                <span>e-commerce</span>
                <br></br>
              </span>
              <span className="bodySmall">
                A comprehensive website for growing businesses that 
              </span>
            </div>
            <div className="plans-pricing-container20">
              <span className="plans-pricing-text37">
                <span>$</span>
                <span></span>
              </span>
              <span className="plans-pricing-pro-plan-pricing">1497</span>
            </div>
            <div className="plans-pricing-container21">
              <div className="plans-pricing-container22">
                <span className="plans-pricing-text40">✔</span>
                <span className="bodySmall">
                   All features of PROFESSIONAL website
                </span>
              </div>
              <div className="plans-pricing-container23">
                <span className="plans-pricing-text42">✔</span>
                <span className="bodySmall">
                  Ability to Sell Unlimited # of Products or Services
                </span>
              </div>
              <div className="plans-pricing-container24">
                <span className="plans-pricing-text43">✔</span>
                <span className="bodySmall">Premium Logo design</span>
              </div>
              <div className="plans-pricing-container25">
                <span className="plans-pricing-text44">✔</span>
                <span className="bodySmall">Premium SEO</span>
              </div>
              <div className="plans-pricing-container26">
                <span className="plans-pricing-text45">✔</span>
                <span className="bodySmall">
                  Extensive business coaching via ZOOM
                </span>
              </div>
            </div>
            <button className="plans-pricing-button2 buttonFilledSecondary">
              Build me an E-COMMERCE website
            </button>
          </div>
        </div>
      </div>
      <div className="plans-pricing-features">
        <div className="plans-pricing-features-container featuresContainer">
          <div className="plans-pricing-features1">
            <h2 className="plans-pricing-features-heading heading2">
              Our Services
            </h2>
            <div className="plans-pricing-our-services-container">
              <FeatureCard
                heading="Website Design"
                subHeading="Custom and responsive website designs that showcase your brand."
              ></FeatureCard>
              <FeatureCard
                heading="Content Creation"
                subHeading="Creative content when &amp; where you need it. Ex: blog articles, social media posts, or product descriptions; etc."
              ></FeatureCard>
              <FeatureCard
                heading="Logo Design"
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
      <div className="plans-pricing-footer">
        <footer className="footerContainer plans-pricing-footer1">
          <div className="plans-pricing-container27">
            <a
              href="https://kristash.com"
              target="_blank"
              rel="noreferrer noopener"
              className="plans-pricing-logo2"
            >
              Kristash
            </a>
            <nav className="plans-pricing-nav1 bodySmall plans-pricing-nav1">
              <Link to="/" className="plans-pricing-home1 bodySmall">
                Home
              </Link>
              <Link to="/faq" className="plans-pricing-faq1 bodySmall">
                FAQ
              </Link>
              <Link
                to="/plans-pricing"
                className="plans-pricing-plans-pricing1 bodySmall"
              >
                Plans &amp; Pricing
              </Link>
              <Link
                to="/portfolio"
                className="plans-pricing-portfolio1 bodySmall"
              >
                Portfolio
              </Link>
              <Link
                to="/resources"
                className="plans-pricing-resources1 bodySmall"
              >
                Resources
              </Link>
              <span className="plans-pricing-contact1 bodySmall">Contact</span>
            </nav>
          </div>
          <div className="plans-pricing-separator"></div>
          <div className="plans-pricing-container28">
            <span className="plans-pricing-text46">
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
                className="plans-pricing-link"
              >
                Kristash
              </a>
              <span className="bodySmall">. All Rights Reserved.</span>
            </span>
            <div className="plans-pricing-icon-group1">
              <a
                href="https://twitter.com/kristashinc"
                className="plans-pricing-link1"
              >
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="plans-pricing-icon10 socialIcons"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
              </a>
              <a
                href="https://instagram.com/kristashinc"
                className="plans-pricing-link2"
              >
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="plans-pricing-icon12 socialIcons"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
              </a>
              <a
                href="https://facebook.com/kristashinc"
                target="_blank"
                rel="noreferrer noopener"
                className="plans-pricing-link3"
              >
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="plans-pricing-icon14 socialIcons"
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

export default PlansPricing
