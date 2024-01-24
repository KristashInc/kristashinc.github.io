import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './contact.css'

const Contact = (props) => {
  return (
    <div className="contact-container">
      <Helmet>
        <title>Contact | Kristash</title>
        <meta
          name="description"
          content="Elevate your online presence with Kristash, your trusted digital marketing agency in Omaha, NE. Drive results with expert SEO, PPC, social media, &amp; web design."
        />
        <meta property="og:title" content="Contact | Kristash" />
        <meta
          property="og:description"
          content="Elevate your online presence with Kristash, your trusted digital marketing agency in Omaha, NE. Drive results with expert SEO, PPC, social media, &amp; web design."
        />
      </Helmet>
      <div className="contact-header">
        <header
          data-thq="thq-navbar"
          className="navbarContainer contact-navbar-interactive"
        >
          <a
            href="https://kristash.com"
            target="_blank"
            rel="noreferrer noopener"
            className="contact-logo logo"
          >
            Kristash
          </a>
          <div data-thq="thq-navbar-nav" className="contact-desktop-menu">
            <nav className="contact-links">
              <Link to="/" className="contact-home bodySmall">
                Home
              </Link>
              <Link to="/faq" className="contact-faq bodySmall">
                FAQ
              </Link>
              <Link
                to="/plans-pricing"
                className="contact-plans-pricing bodySmall"
              >
                Plans &amp; Pricing
              </Link>
              <Link to="/portfolio" className="contact-portfolio bodySmall">
                Portfolio
              </Link>
              <Link to="/resources" className="contact-resources bodySmall">
                Resources
              </Link>
              <Link to="/contact" className="contact-contact bodySmall">
                Contact
              </Link>
            </nav>
            <div className="contact-buttons">
              <button className="contact-login buttonFlat">Login</button>
              <button className="buttonFilled">Register</button>
            </div>
          </div>
          <div data-thq="thq-burger-menu" className="contact-burger-menu">
            <svg viewBox="0 0 1024 1024" className="contact-icon socialIcons">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div
            data-thq="thq-mobile-menu"
            className="contact-mobile-menu1 mobileMenu"
          >
            <div className="contact-nav">
              <div className="contact-top">
                <span className="logo">ONLINE MARKETING AGENCY</span>
                <div data-thq="thq-close-menu" className="contact-close-menu">
                  <svg
                    viewBox="0 0 1024 1024"
                    className="contact-icon02 socialIcons"
                  >
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="contact-links1">
                <Link to="/">Home</Link>
                <Link to="/faq" className="contact-nav4 bodySmall">
                  FAQ
                </Link>
                <Link to="/plans-pricing" className="contact-nav2 bodySmall">
                  Plans &amp; Pricing
                </Link>
                <Link to="/portfolio" className="contact-nav3 bodySmall">
                  Portfolio
                </Link>
                <Link to="/resources" className="contact-nav5 bodySmall">
                  Resources
                </Link>
                <Link to="/contact" className="contact-nav51 bodySmall">
                  Contact
                </Link>
              </nav>
              <div className="contact-buttons1">
                <button className="buttonFlat">Login</button>
                <button className="buttonFilled">Register</button>
              </div>
            </div>
            <div>
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="contact-icon04 socialIcons"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="contact-icon06 socialIcons"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="contact-icon08 socialIcons"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
      </div>
      <div className="contact-hero">
        <div className="contact-hero1 heroContainer">
          <div className="contact-container1">
            <h1 className="contact-hero-heading heading1">Contact</h1>
          </div>
        </div>
      </div>
      <div className="contact-faq1">
        <div className="faqContainer">
          <div className="contact-faq2">
            <form
              name="contact-form"
              enctype="multipart/form-data"
              autoComplete="on"
              className="contact-contact-form"
            >
              <label>Name</label>
              <input
                type="text"
                name="Name"
                required="true"
                placeholder="Name*"
                autoComplete="name"
                className="input"
              />
              <label>
                <br></br>
                <span>Company Name</span>
                <br></br>
              </label>
              <input
                type="text"
                name="Company Name"
                placeholder="Company Name"
                autoComplete="organization"
                className="input"
              />
              <label>
                <br></br>
                <span>Phone Number</span>
              </label>
              <input
                type="tel"
                name="phone number"
                maxlength="12"
                minlength="10"
                placeholder="555-555-5555"
                autoComplete="tel"
                className="input"
              />
              <label>
                <br></br>
                <span>Email</span>
              </label>
              <input
                type="email"
                name="Email*"
                required="true"
                placeholder="Email*"
                autoComplete="email"
                className="input"
              />
              <label>
                <br></br>
                <span>Website</span>
              </label>
              <input
                type="text"
                name="Website"
                placeholder="Website"
                autoComplete="url"
                className="input"
              />
              <label>
                <br></br>
                <span>Service(s) Interested In:</span>
                <br></br>
              </label>
              <select
                multiple="true"
                required="true"
                autoComplete="off"
                className="contact-select-services"
              >
                <option value="Web Design">Web Design</option>
                <option value="SEO/Local SEO" className="contact-seo-local-seo">
                  SEO/Local SEO
                </option>
                <option
                  value="Content Creation"
                  className="contact-content-creation"
                >
                  Content Creation
                </option>
                <option value="Logo Design" className="contact-logo-design">
                  Logo Design
                </option>
                <option value="Branding">Branding</option>
                <option value="Business Coaching">Business Coaching</option>
              </select>
              <label>
                <br></br>
                <span>More Info</span>
                <br></br>
              </label>
              <textarea
                name="More Info"
                placeholder="Write here."
                autoComplete="off"
                className="contact-textarea textarea"
              ></textarea>
            </form>
          </div>
        </div>
      </div>
      <div className="contact-footer">
        <footer className="footerContainer contact-footer1">
          <div className="contact-container2">
            <a
              href="https://kristash.com"
              target="_blank"
              rel="noreferrer noopener"
              className="contact-logo2"
            >
              Kristash
            </a>
            <nav className="contact-nav1 bodySmall contact-nav1">
              <Link to="/" className="contact-home1 bodySmall">
                Home
              </Link>
              <Link to="/faq" className="contact-faq3 bodySmall">
                FAQ
              </Link>
              <Link
                to="/plans-pricing"
                className="contact-plans-pricing1 bodySmall"
              >
                Plans &amp; Pricing
              </Link>
              <Link to="/portfolio" className="contact-portfolio1 bodySmall">
                Portfolio
              </Link>
              <Link to="/resources" className="contact-resources1 bodySmall">
                Resources
              </Link>
              <Link to="/contact" className="contact-contact1 bodySmall">
                Contact
              </Link>
            </nav>
          </div>
          <div className="contact-separator"></div>
          <div className="contact-container3">
            <span className="contact-text22">
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
                className="contact-link"
              >
                Kristash
              </a>
              <span className="bodySmall">. All Rights Reserved.</span>
            </span>
            <div className="contact-icon-group1">
              <a
                href="https://twitter.com/kristashinc"
                className="contact-link1"
              >
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="contact-icon10 socialIcons"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
              </a>
              <a
                href="https://instagram.com/kristashinc"
                className="contact-link2"
              >
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="contact-icon12 socialIcons"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
              </a>
              <a
                href="https://facebook.com/kristashinc"
                target="_blank"
                rel="noreferrer noopener"
                className="contact-link3"
              >
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="contact-icon14 socialIcons"
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

export default Contact
