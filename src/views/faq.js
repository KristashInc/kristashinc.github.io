import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Question1 from '../components/question1'
import './faq.css'

const FAQ = (props) => {
  return (
    <div className="faq-container">
      <Helmet>
        <title>FAQ | Kristash</title>
        <meta
          name="description"
          content="Elevate your online presence with Kristash, your trusted digital marketing agency in Omaha, NE. Drive results with expert SEO, PPC, social media, &amp; web design."
        />
        <meta property="og:title" content="FAQ | Kristash" />
        <meta
          property="og:description"
          content="Elevate your online presence with Kristash, your trusted digital marketing agency in Omaha, NE. Drive results with expert SEO, PPC, social media, &amp; web design."
        />
      </Helmet>
      <div className="faq-header">
        <header
          data-thq="thq-navbar"
          className="navbarContainer faq-navbar-interactive"
        >
          <a
            href="https://kristash.com"
            target="_blank"
            rel="noreferrer noopener"
            className="faq-logo logo"
          >
            Kristash
          </a>
          <div data-thq="thq-navbar-nav" className="faq-desktop-menu">
            <nav className="faq-links">
              <Link to="/" className="faq-home bodySmall">
                Home
              </Link>
              <Link to="/faq" className="faq-faq bodySmall">
                FAQ
              </Link>
              <Link to="/plans-pricing" className="faq-plans-pricing bodySmall">
                Plans &amp; Pricing
              </Link>
              <Link to="/portfolio" className="faq-portfolio bodySmall">
                Portfolio
              </Link>
              <Link to="/resources" className="faq-resources bodySmall">
                Resources
              </Link>
              <span className="faq-contact bodySmall">Contact</span>
            </nav>
            <div className="faq-buttons">
              <button className="faq-login buttonFlat">Login</button>
              <button className="buttonFilled">Register</button>
            </div>
          </div>
          <div data-thq="thq-burger-menu" className="faq-burger-menu">
            <svg viewBox="0 0 1024 1024" className="faq-icon socialIcons">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div
            data-thq="thq-mobile-menu"
            className="faq-mobile-menu1 mobileMenu"
          >
            <div className="faq-nav">
              <div className="faq-top">
                <span className="logo">ONLINE MARKETING AGENCY</span>
                <div data-thq="thq-close-menu" className="faq-close-menu">
                  <svg
                    viewBox="0 0 1024 1024"
                    className="faq-icon02 socialIcons"
                  >
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="faq-links1">
                <Link to="/" className="faq-home1 bodySmall">
                  Home
                </Link>
                <Link to="/faq" className="faq-faq1 bodySmall">
                  FAQ
                </Link>
                <Link
                  to="/plans-pricing"
                  className="faq-plans-pricing1 bodySmall"
                >
                  Plans &amp; Pricing
                </Link>
                <Link to="/portfolio" className="faq-portfolio1 bodySmall">
                  Portfolio
                </Link>
                <Link to="/resources" className="faq-resources1 bodySmall">
                  Resources
                </Link>
                <Link to="/contact" className="faq-contact1 bodySmall">
                  Contact
                </Link>
              </nav>
              <div className="faq-buttons1">
                <button className="buttonFlat">Login</button>
                <button className="buttonFilled">Register</button>
              </div>
            </div>
            <div>
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="faq-icon04 socialIcons"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="faq-icon06 socialIcons"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="faq-icon08 socialIcons"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
      </div>
      <div className="faq-hero">
        <div className="faq-hero1 heroContainer">
          <div className="faq-container1">
            <h1 className="faq-hero-heading">
              <span className="heading1 faq-text">FAQ</span>
              <br></br>
            </h1>
            <span className="faq-hero-sub-heading bodyLarge">
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
          <h2 className="faq-text16 heading2">Frequently Asked Questions</h2>
          <span className="faq-text17 bodyLarge">
            <span>Here are some of the most common questions that we get.</span>
            <br></br>
          </span>
        </div>
      </div>
      <div className="faq-features">
        <div className="faq-features-container featuresContainer">
          <div className="faq-faq2">
            <div className="faq-container2">
              <Question1
                answer="Our online marketing agency offers Website Design, Content Creation, Logo Design, Company Branding, SEO/Local SEO, and Business Coaching services to startups, small businesses, musicians, artists, and many other other entities."
                question="What services does your online marketing agency offer?"
              ></Question1>
              <Question1
                answer="You can contact us via email at info@kristash.com, by phone number at 531.270.1723, or by visiting the Contact page on our website and filling out the contact form."
                question="How can I contact your online marketing agency?"
              ></Question1>
              <Question1
                answer="Yes, we offer customized website design solutions tailored to meet the specific needs and preferences of each client. We understand that every client is different, so get in contact with us today to go over the specifics of your needs!"
                question="Do you offer customized website design solutions?"
              ></Question1>
              <Question1
                answer="To get a logo designed by our agency, you can fill out the logo design request form on our website. Our team will then contact you to discuss your requirements and provide you with design concepts."
                question="What is the process for getting a logo designed by your agency?"
              ></Question1>
              <Question1
                answer="Yes, we specialize in SEO (Search Engine Optimization) and can help improve your website's search engine rankings through various strategies such as keyword optimization, content creation, and link building among other expert techniques."
                question="Can you help improve my website's search engine rankings?"
              ></Question1>
            </div>
          </div>
        </div>
      </div>
      <div className="faq-pricing"></div>
      <div className="faq-banner"></div>
      <div className="faq-faq3">
        <div className="faq-faq-container faqContainer"></div>
      </div>
      <div className="faq-footer">
        <footer className="footerContainer faq-footer1">
          <div className="faq-container3">
            <a
              href="https://kristash.com"
              target="_blank"
              rel="noreferrer noopener"
              className="faq-logo2"
            >
              Kristash
            </a>
            <nav className="faq-nav1">
              <Link to="/" className="faq-home2 bodySmall">
                Home
              </Link>
              <Link to="/faq" className="faq-faq4 bodySmall">
                FAQ
              </Link>
              <Link
                to="/plans-pricing"
                className="faq-plans-pricing2 bodySmall"
              >
                Plans &amp; Pricing
              </Link>
              <Link to="/portfolio" className="faq-portfolio2 bodySmall">
                Portfolio
              </Link>
              <Link to="/resources" className="faq-resources2 bodySmall">
                Resources
              </Link>
              <span className="faq-contact2 bodySmall">Contact</span>
            </nav>
          </div>
          <div className="faq-separator"></div>
          <div className="faq-container4">
            <span className="faq-text20">
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
                className="faq-link"
              >
                Kristash
              </a>
              <span className="bodySmall">. All Rights Reserved.</span>
            </span>
            <div className="faq-icon-group1">
              <a href="https://twitter.com/kristashinc" className="faq-link1">
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="faq-icon10 socialIcons"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
              </a>
              <a href="https://instagram.com/kristashinc" className="faq-link2">
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="faq-icon12 socialIcons"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
              </a>
              <a
                href="https://facebook.com/kristashinc"
                target="_blank"
                rel="noreferrer noopener"
                className="faq-link3"
              >
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="faq-icon14 socialIcons"
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

export default FAQ
