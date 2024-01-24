import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import FeatureCard from '../components/feature-card'
import Question1 from '../components/question1'
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
          <div className="resources-container01">
            <h1 className="resources-hero-heading heading1">Resources</h1>
            <span className="resources-hero-sub-heading bodyLarge">
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
            <div className="resources-btn-group">
              <button className="buttonFilled">Get Started</button>
              <button className="buttonFlat">Learn More →</button>
            </div>
          </div>
        </div>
      </div>
      <div className="resources-container02">
        <h2 className="resources-text14">What&apos;s your SEO score?</h2>
        <div className="resources-container03">
          <div className="resources-container04">
            <Script
              html={`<!-- Begin MySiteAuditor -->
<script src="//cdn.mysiteauditor.com/audit-tool.js" type="text/javascript"></script>

<div id="seogroup-embed"  data-apikey="e3be6b3d12972592de7794d0b8bae48e0889223d" data-language="english" data-type="slim" data-hex-color="#000000" data-hex-cta-color="#566822" data-hex-text="#FFFFFF" data-load-bar-color="#61B13B" data-font="Roboto"></div>
<!-- End MySiteAuditor -->`}
            ></Script>
          </div>
        </div>
      </div>
      <div className="resources-features">
        <div className="featuresContainer">
          <div className="resources-features1">
            <div className="resources-container05">
              <span className="overline">
                <span>features</span>
                <br></br>
              </span>
              <h2 className="resources-features-heading heading2">
                Our Services
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
            <div className="resources-container06">
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
      <div className="resources-pricing">
        <div className="pricingContainer">
          <div className="resources-container07">
            <span className="overline">
              <span>Pricing</span>
              <br></br>
            </span>
            <h2 className="heading2">Choose the Website for Your Business</h2>
            <span className="resources-pricing-sub-heading bodyLarge">
              <span>
                <span>
                  We offer flexible pricing options to meet your specific needs
                </span>
              </span>
            </span>
          </div>
          <div className="resources-container08">
            <div className="freePricingCard resources-pricing-card">
              <div className="resources-container09">
                <span className="resources-text37 heading3">Portfolio</span>
                <span className="bodySmall">
                  A basic website for businesses on a tight budget
                </span>
              </div>
              <div className="resources-container10">
                <span className="resources-text38">
                  <span>$</span>
                  <span></span>
                </span>
                <span className="resources-free-plan-price">597</span>
              </div>
              <div className="resources-container11">
                <div className="resources-container12">
                  <span className="resources-text41">✔</span>
                  <span className="bodySmall">Website design</span>
                </div>
                <div className="resources-container13">
                  <span className="resources-text42">✔</span>
                  <span className="bodySmall">Logo design</span>
                </div>
                <div className="resources-container14">
                  <span className="resources-text43">✔</span>
                  <span className="bodySmall">Basic SEO</span>
                </div>
                <div className="resources-container15">
                  <span className="resources-text44">✔</span>
                  <span className="bodySmall">Limited business coaching</span>
                </div>
              </div>
              <button className="resources-button buttonOutline">
                Continue with a PORTFOLIO site
              </button>
            </div>
            <div className="basicPricingCard resources-pricing-card1">
              <div className="resources-container16">
                <span className="resources-text45 heading3">Professional</span>
                <span className="bodySmall">
                  An affordable plan for small businesses
                </span>
              </div>
              <div className="resources-container17">
                <span className="resources-text46">
                  <span>$</span>
                  <span></span>
                </span>
                <span className="resources-basic-plan-pricing">847</span>
              </div>
              <div className="resources-container18">
                <div className="resources-container19">
                  <span className="resources-text49">✔</span>
                  <span className="bodySmall">
                    All features of PORTFOLIO site, PLUS:
                  </span>
                </div>
                <div className="resources-container20">
                  <span className="resources-text51">✔</span>
                  <span>Take appointments via a Booking Plugin</span>
                </div>
                <div className="resources-container21">
                  <span className="resources-text52">✔</span>
                  <span className="bodySmall">
                    Headless CMS integration for adding/updating website content
                  </span>
                </div>
                <div className="resources-container22">
                  <span className="resources-text53">✔</span>
                  <span className="bodySmall">Advanced SEO</span>
                </div>
                <div className="resources-container23">
                  <span className="resources-text54">✔</span>
                  <span className="bodySmall">
                    Business coaching ZOOM session (2x)
                  </span>
                </div>
              </div>
              <button className="resources-button1 buttonFilledSecondary">
                Build me a PROFESSIONAL website
              </button>
            </div>
            <div className="proPricingCard resources-pricing-card2">
              <div className="resources-container24">
                <span className="resources-text55 heading3">
                  <span>e-commerce</span>
                  <br></br>
                </span>
                <span className="bodySmall">
                  A comprehensive plan for growing businesses
                </span>
              </div>
              <div className="resources-container25">
                <span className="resources-text58">
                  <span>$</span>
                  <span></span>
                </span>
                <span className="resources-pro-plan-pricing">1247</span>
                <span className="resources-text61">/ month</span>
              </div>
              <div className="resources-container26">
                <div className="resources-container27">
                  <span className="resources-text62">✔</span>
                  <span className="bodySmall">
                     All features of PROFESSIONAL website
                  </span>
                </div>
                <div className="resources-container28">
                  <span className="resources-text64">✔</span>
                  <span className="bodySmall">Website design</span>
                </div>
                <div className="resources-container29">
                  <span className="resources-text65">✔</span>
                  <span className="bodySmall">Logo design</span>
                </div>
                <div className="resources-container30">
                  <span className="resources-text66">✔</span>
                  <span className="bodySmall">Premium SEO</span>
                </div>
                <div className="resources-container31">
                  <span className="resources-text67">✔</span>
                  <span className="bodySmall">
                    Extensive business coaching via ZOOM
                  </span>
                </div>
              </div>
              <button className="resources-button2 buttonFilledSecondary">
                Build me an E-COMMERCE website
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="resources-banner">
        <div className="bannerContainer resources-banner1">
          <h1 className="resources-banner-heading heading2">
            We Design, Optimize, and Coach for Success
          </h1>
          <span className="resources-banner-sub-heading bodySmall">
            <span>
              <span>
                <span>
                  At our online marketing agency, we offer a range of services
                  to help businesses and startups thrive in the digital world.
                  From stunning website designs to effective SEO strategies, we
                  have the expertise to elevate your brand and drive results.
                  Partner with us and take your online presence to new heights.
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
          <button className="buttonFilled">Learn More</button>
        </div>
      </div>
      <div className="resources-faq1">
        <div className="faqContainer">
          <div className="resources-faq2">
            <div className="resources-container32">
              <span className="overline">
                <span>FAQ</span>
                <br></br>
              </span>
              <h2 className="resources-text85 heading2">Common Questions</h2>
              <span className="resources-text86 bodyLarge">
                <span>
                  Here are some of the most common questions that we get.
                </span>
                <br></br>
              </span>
            </div>
            <div className="resources-container33">
              <Question1
                answer="Our online marketing agency offers website design, logo design, SEO, and business coaching services to businesses and startups."
                question="What services does your online marketing agency offer?"
              ></Question1>
              <Question1
                answer="You can contact our online marketing agency by visiting the 'Contact' page on our website and filling out the contact form or by calling our provided phone number."
                question="How can I contact your online marketing agency?"
              ></Question1>
              <Question1
                answer="Yes, we offer customized website design solutions tailored to meet the specific needs and preferences of each client."
                question="Do you offer customized website design solutions?"
              ></Question1>
              <Question1
                answer="To get a logo designed by our agency, you can fill out the logo design request form on our website. Our team will then contact you to discuss your requirements and provide you with design concepts."
                question="What is the process for getting a logo designed by your agency?"
              ></Question1>
              <Question1
                answer="Yes, we specialize in SEO (Search Engine Optimization) and can help improve your website's search engine rankings through various strategies such as keyword optimization, content creation, and link building."
                question="Can you help improve my website's search engine rankings?"
              ></Question1>
            </div>
          </div>
        </div>
      </div>
      <div className="resources-footer">
        <footer className="footerContainer resources-footer1">
          <div className="resources-container34">
            <a
              href="https://kristash.com"
              target="_blank"
              rel="noreferrer noopener"
              className="resources-logo2"
            >
              Kristash
            </a>
            <nav className="resources-nav1 bodySmall resources-nav1">
              <Link to="/" className="resources-home1 bodySmall">
                Home
              </Link>
              <Link to="/faq" className="resources-faq3 bodySmall">
                FAQ
              </Link>
              <Link
                to="/plans-pricing"
                className="resources-plans-pricing1 bodySmall"
              >
                Plans &amp; Pricing
              </Link>
              <Link to="/portfolio" className="resources-portfolio1 bodySmall">
                Portfolio
              </Link>
              <Link to="/resources" className="resources-resources1 bodySmall">
                Resources
              </Link>
              <Link to="/contact" className="resources-contact1 bodySmall">
                Contact
              </Link>
            </nav>
          </div>
          <div className="resources-separator"></div>
          <div className="resources-container35">
            <span className="resources-text89">
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
