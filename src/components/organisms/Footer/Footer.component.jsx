import React from 'react';
import './Footer.styles.scss';

const Footer = () => {
  return (
    <footer class="bg-black d:bg-white mt-auto">
      <div class="p-wrapper bar0 mx-auto pt48 pb64 sm:pt32 sm:pb0 fs-body2 overflow-hidden print:d-none">
        <div class="d-flex sm:fd-column">
          <div class="flex--item3 sm:mb32 d-flex fd-column sm:fd-row ai-start sm:ai-center sm:jc-space-between">
            <svg
              id="svgLogoGlyphMd"
              aria-hidden="true"
              class="svg-icon iconLogoGlyphMd native mb-auto"
              width="32"
              height="37"
              viewBox="0 0 32 37"
            >
              <path d="M26 33v-9h4v13H0V24h4v9h22Z" fill="#BCBBBB"></path>
              <path
                d="m21.5 0-2.7 2 9.9 13.3 2.7-2L21.5 0ZM26 18.4 13.3 7.8l2.1-2.5 12.7 10.6-2.1 2.5ZM9.1 15.2l15 7 1.4-3-15-7-1.4 3Zm14 10.79.68-2.95-16.1-3.35L7 23l16.1 2.99ZM23 30H7v-3h16v3Z"
                fill="#F48024"
              ></path>
            </svg>
          </div>
          <div class="d-flex fl1 ff-row-wrap sm:mb32">
            <div class="flex--item6">
              <h3 class="tt-uppercase fs-body2 fc-black-200">Stack Overflow</h3>
              <a
                class="fc-black-400 h:fc-black-200 py2 d-block"
                href="https://stackoverflow.co/"
              >
                About
              </a>
              <a
                class="fc-black-400 h:fc-black-200 py2 d-block"
                href="https://stackoverflow.co/company/press/"
              >
                Press
              </a>
              <a
                class="fc-black-400 h:fc-black-200 py2 d-block"
                href="https://stackoverflow.co/company/work-here/"
              >
                Work Here
              </a>
              <a
                class="fc-black-400 h:fc-black-200 py2 d-block"
                href="https://stackoverflow.co/company/contact/"
              >
                Contact Us
              </a>
              <a
                class="fc-black-400 h:fc-black-200 py2 d-block"
                href="https://stackoverflow.com/questions/"
              >
                Questions
              </a>
            </div>
            <div class="flex--item6">
              <h3 class="tt-uppercase fs-body2 fc-black-200">Products</h3>
              <a
                class="fc-black-400 h:fc-black-200 py2 d-block"
                href="https://stackoverflow.co/teams/"
              >
                Teams
              </a>
              <a
                class="fc-black-400 h:fc-black-200 py2 d-block"
                href="https://stackoverflow.co/advertising/"
              >
                Advertising{' '}
              </a>
              <a
                class="fc-black-400 h:fc-black-200 py2 d-block"
                href="https://stackoverflow.co/advertising/collectives/"
              >
                Collectives{' '}
              </a>
              <a
                class="fc-black-400 h:fc-black-200 py2 d-block"
                href="https://stackoverflow.co/advertising/employer-branding/"
              >
                Talent
              </a>
            </div>
          </div>
          <div class="d-flex fl1 ff-row-wrap sm:mb32">
            <div class="flex--item6">
              <h3 class="tt-uppercase fs-body2 fc-black-200">Policies</h3>
              <a
                class="fc-black-400 h:fc-black-200 py2 d-block"
                href="https://stackoverflow.com/legal/"
              >
                Legal
              </a>
              <a
                class="fc-black-400 h:fc-black-200 py2 d-block"
                href="https://stackoverflow.com/legal/privacy-policy/"
              >
                Privacy Policy{' '}
              </a>
              <a
                class="fc-black-400 h:fc-black-200 py2 d-block"
                href="https://stackoverflow.com/legal/terms-of-service/"
              >
                Terms of Service{' '}
              </a>
              <span
                class="fc-black-400 h:fc-black-200 py2 d-block c-pointer"
                onclick="OneTrust.ToggleInfoDisplay()"
              >
                Cookie Settings{' '}
              </span>
              <a
                class="fc-black-400 h:fc-black-200 py2 d-block"
                href="https://stackoverflow.com/legal/cookie-policy/"
              >
                Cookie Policy
              </a>
            </div>
            <div class="flex--item6">
              <h3 class="tt-uppercase fs-body2 fc-black-200">Channels</h3>
              <a
                class="fc-black-400 h:fc-black-200 py2 d-block"
                href="https://stackoverflow.blog/"
              >
                Blog{' '}
              </a>
              <a
                class="fc-black-400 h:fc-black-200 py2 d-block"
                href="https://stackoverflow.blog/podcast/"
              >
                Podcast{' '}
              </a>
              <a
                class="fc-black-400 h:fc-black-200 py2 d-block"
                href="https://stackoverflow.blog/newsletter/"
              >
                Newsletter{' '}
              </a>
              <a
                class="fc-black-400 h:fc-black-200 py2 d-block"
                href="https://twitter.com/stackoverflow/"
              >
                Twitter
              </a>
              <a
                class="fc-black-400 h:fc-black-200 py2 d-block"
                href="https://linkedin.com/company/stack-overflow/"
              >
                LinkedIn{' '}
              </a>
              <a
                class="fc-black-400 h:fc-black-200 py2 d-block"
                href="https://www.instagram.com/thestackoverflow/"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
