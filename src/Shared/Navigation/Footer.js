import React from "react";
import { Link } from "react-router-dom";

import Grid from "@material-ui/core/Grid";

import "./Footer.css";

const Footer = () => {
  let d = new Date();
  let fullYear = d.getFullYear();
  return (
    <footer className="footer-Section">
      <div className="footer__Container padding__Footer">
        <div className="footer__Body">
          <Grid container>
            <Grid item xs={12} sm={12} md={9}>
              <Grid container>
                <Grid item xs={12} md={4} lg={3}>
                  <Grid container>
                    <ul className="footer-links-list">
                      <li className="footer-link footer-url-header">
                        <Link
                          data-type="click_navFooter"
                          data-path="gift cards"
                          className="nav-uppercase nav-brand"
                          to="https://www.nike.com/gift-cards"
                          data-pre="ILink"
                        >
                          GIFT CARDS
                        </Link>
                      </li>
                      <li className="footer-link">
                        <Link
                          data-type="click_navFooter"
                          data-path="promotions"
                          className="footer-url-nav"
                          to="https://www.nike.com/promo-code"
                          data-pre="ILink"
                        >
                          PROMOTIONS
                        </Link>
                      </li>
                      <li className="footer-link">
                        <Link
                          data-type="click_navFooter"
                          data-path="find a store"
                          className="footer-url-nav"
                          to="https://www.nike.com/retail"
                          data-pre="ILink"
                        >
                          FIND A STORE
                        </Link>
                      </li>
                      <li className="footer-link">
                        <Link
                          data-type="click_navFooter"
                          data-path="sign up for email"
                          className="footer-url-nav"
                          data-pre="ILink"
                          to="/newsLetter"
                        >
                          SIGN UP FOR EMAIL
                        </Link>
                      </li>
                      <li className="footer-link">
                        <Link
                          data-type="click_navFooter"
                          data-path="become a member"
                          className="footer-url-nav"
                          to="https://www.nike.com/register"
                          data-pre="ILink"
                        >
                          BECOME A MEMBER
                        </Link>
                      </li>
                      <li className="footer-link">
                        <Link
                          data-type="click_navFooter"
                          data-path="nike journal"
                          className="footer-url-nav"
                          to="https://www.nike.com/journal/coaching"
                          data-pre="ILink"
                        >
                          NIKE JOURNAL
                        </Link>
                      </li>
                      <li className="footer-link">
                        <Link
                          data-type="click_navFooter"
                          data-path="site feedback"
                          className="footer-url-nav"
                          to="#site-feedback"
                          data-pre="ILink"
                        >
                          SEND US FEEDBACK
                        </Link>
                      </li>
                    </ul>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={4} lg={3}>
                  <Grid container>
                    <ul className="footer-links-list">
                      <li className="footer-link footer-url-header">
                        <Link
                          language="en"
                          aria-label="main-footer, main-footer, Get Help"
                          data-type="click_navFooter"
                          data-path="get help"
                          className="nav-uppercase nav-brand"
                          to="https://www.nike.com/help"
                          data-pre="ILink"
                        >
                          Get Help
                        </Link>
                      </li>
                      <li className="footer-link">
                        <Link
                          data-type="click_navFooter"
                          data-path="get help:order status"
                          className="footer-url-nav"
                          to="https://www.nike.com/orders/details/"
                          data-pre="ILink"
                        >
                          Order Status
                        </Link>
                      </li>
                      <li className="footer-link">
                        <Link
                          data-type="click_navFooter"
                          data-path="get help:shipping and delivery"
                          className="footer-url-nav"
                          to="https://www.nike.com/help/a/shipping-delivery"
                          data-pre="ILink"
                        >
                          Shipping and Delivery
                        </Link>
                      </li>
                      <li className="footer-link">
                        <Link
                          data-type="click_navFooter"
                          data-path="get help:returns"
                          className="footer-url-nav"
                          to="https://www.nike.com/help/a/returns-policy"
                          data-pre="ILink"
                        >
                          Returns
                        </Link>
                      </li>
                      <li className="footer-link">
                        <Link
                          data-type="click_navFooter"
                          data-path="get help:payment options"
                          className="footer-url-nav"
                          to="https://www.nike.com/help/a/payment-options"
                          data-pre="ILink"
                        >
                          Payment Options
                        </Link>
                      </li>
                      <li className="footer-link">
                        <Link
                          data-type="click_navFooter"
                          data-path="get help:gift card balance"
                          className="footer-url-nav"
                          to="https://www.nike.com/orders/gift-card-lookup"
                          data-pre="ILink"
                        >
                          Gift Card Balance
                        </Link>
                      </li>
                      <li className="footer-link">
                        <Link
                          data-type="click_navFooter"
                          data-path="get help:contact us"
                          className="footer-url-nav"
                          to="https://www.nike.com/help/#contact"
                          data-pre="ILink"
                        >
                          Contact Us
                        </Link>
                      </li>
                    </ul>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={4} lg={3}>
                  <Grid container>
                    <ul className="footer-links-list">
                      <li className="footer-link footer-url-header">
                        <Link
                          language="en"
                          aria-label="main-footer, About Nike"
                          data-type="click_navFooter"
                          data-path="about nike"
                          className="nav-uppercase nav-brand"
                          to="http://about.nike.com/"
                          data-pre="ILink"
                        >
                          About Nike
                        </Link>
                      </li>
                      <li className="footer-link">
                        <Link
                          data-type="click_navFooter"
                          data-path="about nike:news"
                          className="footer-url-nav"
                          to="http://news.nike.com/"
                          data-pre="ILink"
                        >
                          News
                        </Link>
                      </li>
                      <li className="footer-link">
                        <Link
                          data-type="click_navFooter"
                          data-path="about nike:careers"
                          className="footer-url-nav"
                          to="https://jobs.nike.com/"
                          data-pre="ILink"
                        >
                          Careers
                        </Link>
                      </li>
                      <li className="footer-link">
                        <Link
                          data-type="click_navFooter"
                          data-path="about nike:investors"
                          className="footer-url-nav"
                          to="http://investors.nike.com/"
                          data-pre="ILink"
                        >
                          Investors
                        </Link>
                      </li>
                      <li className="footer-link">
                        <Link
                          data-type="click_navFooter"
                          data-path="about nike:purpose"
                          className="footer-url-nav"
                          to="https://purpose.nike.com/"
                          data-pre="ILink"
                        >
                          Purpose
                        </Link>
                      </li>
                      <li className="footer-link">
                        <Link
                          data-type="click_navFooter"
                          data-path="about nike:sustainability"
                          className="footer-url-nav"
                          to="https://www.nike.com/sustainability"
                          data-pre="ILink"
                        >
                          Sustainability
                        </Link>
                      </li>
                      <li className="footer-link">
                        <Link
                          data-type="click_navFooter"
                          data-path="about nike:ca supply chains act"
                          className="footer-url-nav"
                          to="https://www.nike.com/help/a/supply-chain"
                          data-pre="ILink"
                        >
                          CA Supply Chains Act
                        </Link>
                      </li>
                    </ul>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={3}>
              <ul className="footer-socialMedia-list">
                <li className="footer-icon-socialMedia">
                  <a
                    target="_blank"
                    aria-label="Twitter"
                    title="Twitter"
                    rel="noopener noreferrer"
                    data-type="click_navFooter"
                    data-path="social:twitter"
                    className="social-link footer-link"
                    href="https://twitter.com/Nike"
                    data-pre="ILink"
                  >
                    <svg className="social-link-icon" viewBox="0 0 24 24">
                      <path d="M12 0C9.813 0 7.8.533 5.96 1.6A11.793 11.793 0 0 0 1.6 5.96C.533 7.8 0 9.813 0 12s.533 4.2 1.6 6.04a11.793 11.793 0 0 0 4.36 4.36C7.8 23.467 9.813 24 12 24s4.2-.533 6.04-1.6a11.793 11.793 0 0 0 4.36-4.36C23.467 16.2 24 14.187 24 12s-.533-4.2-1.6-6.04a11.793 11.793 0 0 0-4.36-4.36C16.2.533 14.187 0 12 0zm6 9.28v.4c0 1.387-.333 2.72-1 4a8.186 8.186 0 0 1-2.84 3.12c-1.333.853-2.827 1.28-4.48 1.28a8.535 8.535 0 0 1-4.56-1.28h.72c1.387 0 2.613-.427 3.68-1.28-.64 0-1.213-.2-1.72-.6-.507-.4-.867-.92-1.08-1.56l.56.16c.373 0 .64-.053.8-.16a2.67 2.67 0 0 1-1.72-1 2.913 2.913 0 0 1-.68-1.88c.427.267.88.4 1.36.4-.907-.533-1.36-1.36-1.36-2.48 0-.533.133-1.04.4-1.52.8.96 1.72 1.707 2.76 2.24a8.133 8.133 0 0 0 3.4.88c-.107-.16-.16-.4-.16-.72 0-.8.293-1.493.88-2.08s1.28-.88 2.08-.88 1.547.293 2.24.88c.48-.107 1.12-.347 1.92-.72-.213.747-.64 1.28-1.28 1.6H18c.747-.16 1.28-.32 1.6-.48-.533.693-1.067 1.253-1.6 1.68z"></path>
                    </svg>
                  </a>
                </li>
                <li className="footer-icon-socialMedia">
                  <a
                    target="_blank"
                    aria-label="Facebook"
                    title="Facebook"
                    data-type="click_navFooter"
                    data-path="social:facebook"
                    rel="noopener noreferrer"
                    className="social-link footer-link"
                    href="https://www.facebook.com/nike"
                    data-pre="ILink"
                  >
                    <svg className="social-link-icon" viewBox="0 0 24 24">
                      <path d="M12 0C9.813 0 7.8.533 5.96 1.6A11.793 11.793 0 0 0 1.6 5.96C.533 7.8 0 9.813 0 12s.533 4.2 1.6 6.04a11.793 11.793 0 0 0 4.36 4.36C7.8 23.467 9.813 24 12 24s4.2-.533 6.04-1.6a11.793 11.793 0 0 0 4.36-4.36C23.467 16.2 24 14.187 24 12s-.533-4.2-1.6-6.04a11.793 11.793 0 0 0-4.36-4.36C16.2.533 14.187 0 12 0zm3.12 12h-2v7.2H10.4V12H8.64V9.52h1.76V8c0-1.12.187-1.92.56-2.4.427-.587 1.2-.88 2.32-.88h2V7.2h-1.2c-.427 0-.693.067-.8.2-.107.133-.16.387-.16.76v1.2h2.16L15.12 12z"></path>
                    </svg>
                  </a>
                </li>
                <li className="footer-icon-socialMedia">
                  <a
                    target="_blank"
                    aria-label="Youtube"
                    title="Youtube"
                    rel="noopener noreferrer"
                    data-type="click_navFooter"
                    data-path="social:youtube"
                    className="social-link footer-link"
                    href="https://www.youtube.com/user/nike"
                    data-pre="ILink"
                  >
                    <svg className="social-link-icon" viewBox="0 0 24 24">
                      <path d="M11.28 17.6a.604.604 0 0 1-.2.24.43.43 0 0 1-.24.08c-.08 0-.133-.027-.16-.08a.557.557 0 0 1-.04-.24v-2.96h-.72v3.28a1 1 0 0 0 .12.52c.08.133.2.2.36.2.16 0 .307-.053.44-.16.133-.107.28-.24.44-.4v.48H12v-3.92h-.72v2.96zM6.96 14v-.8H9.6v.8h-.88v4.56h-.88V14h-.88zm4.96-4.72c-.107 0-.2-.04-.28-.12a.384.384 0 0 1-.12-.28v-2.4c0-.053.027-.107.08-.16.053-.053.147-.08.28-.08.133 0 .24.027.32.08a.27.27 0 0 1 .12.24v2.32c0 .107-.04.2-.12.28a.384.384 0 0 1-.28.12zm2 8.32c0-.64.027-1.307.08-2 0-.107-.04-.2-.12-.28-.08-.08-.16-.12-.24-.12h-.12l-.24.16v2.4l.24.16.16.08c.107 0 .173-.027.2-.08.027-.053.04-.16.04-.32zm.08-3.04c.213 0 .387.08.52.24.133.16.2.4.2.72v2.24c0 .267-.053.48-.16.64a.422.422 0 0 1-.44.2 2.1 2.1 0 0 1-.48-.12.506.506 0 0 1-.28-.24v.32h-.8V13.2h.8v1.76c.107-.107.213-.2.32-.28a.532.532 0 0 1 .32-.12zm3.92 5.12c.267-.213.427-.907.48-2.08.053-.587.107-1.147.16-1.68 0-.48-.053-1.013-.16-1.6-.107-1.173-.28-1.893-.52-2.16-.24-.267-1.267-.453-3.08-.56l-2.64-.08-2.72.08c-1.813.107-2.84.293-3.08.56-.24.267-.413.987-.52 2.16a16.07 16.07 0 0 0-.08 1.6c0 .533.027 1.093.08 1.68.107 1.173.28 1.88.52 2.12.24.24 1.267.44 3.08.6l2.72.08 2.64-.08c1.813-.16 2.853-.347 3.12-.56v-.08zM8.4 4h-.96l1.12 3.6v2.24h.96v-2.4L10.64 4h-.96l-.56 2.32h-.08L8.4 4zm2.32 2.56V8.8c0 .373.107.667.32.88.213.213.507.32.88.32s.667-.107.88-.32c.213-.213.32-.507.32-.88V6.56c0-.32-.107-.587-.32-.8-.213-.213-.507-.32-.88-.32s-.667.107-.88.32c-.213.213-.32.48-.32.8zm3.12-.96v3.6a1 1 0 0 0 .12.52c.08.133.213.2.4.2.187 0 .36-.04.52-.12.16-.08.32-.2.48-.36v.48h.88V5.6h-.88v3.2a.523.523 0 0 1-.24.24.645.645 0 0 1-.28.08c-.08 0-.133-.013-.16-.04-.027-.027-.04-.093-.04-.2V5.52h-.8v.08zM12 0c2.187 0 4.2.533 6.04 1.6a11.793 11.793 0 0 1 4.36 4.36C23.467 7.8 24 9.813 24 12s-.533 4.2-1.6 6.04a11.793 11.793 0 0 1-4.36 4.36C16.2 23.467 14.187 24 12 24s-4.2-.533-6.04-1.6a11.793 11.793 0 0 1-4.36-4.36C.533 16.2 0 14.187 0 12s.533-4.2 1.6-6.04A11.793 11.793 0 0 1 5.96 1.6C7.8.533 9.813 0 12 0zm4.56 16.08l-.08-.4c0-.16-.027-.28-.08-.36a.27.27 0 0 0-.24-.12.27.27 0 0 0-.24.12c-.053.08-.08.2-.08.36v.4h.72zm-.32-1.52c.32 0 .573.093.76.28.187.187.28.467.28.84v.96h-1.44v.8c0 .16.027.28.08.36.053.08.147.12.28.12.133 0 .227-.04.28-.12.053-.08.08-.227.08-.44v-.16h.72v.24c0 .373-.093.667-.28.88-.187.213-.453.32-.8.32-.347 0-.613-.107-.8-.32-.187-.213-.28-.507-.28-.88v-1.76c0-.32.107-.587.32-.8.213-.213.48-.32.8-.32z"></path>
                    </svg>
                  </a>
                </li>
                <li className="footer-icon-socialMedia">
                  <a
                    target="_blank"
                    aria-label="Instagram "
                    title="Instagram "
                    rel="noopener noreferrer"
                    data-type="click_navFooter"
                    data-path="social:instagram"
                    className="social-link footer-link"
                    href="https://instagram.com/nike"
                    data-pre="ILink"
                  >
                    <svg className="social-link-icon" viewBox="0 0 24 24">
                      <path d="M16 12.48a4.723 4.723 0 0 1-.56 1.48 3.93 3.93 0 0 1-1.04 1.16 3.428 3.428 0 0 1-1.92.68 3.628 3.628 0 0 1-1.96-.48 3.414 3.414 0 0 1-1.4-1.48c-.48-.96-.587-1.973-.32-3.04H7.68l.08 5.52c0 .107.04.213.12.32.08.107.173.16.28.16h8.32c.107 0 .213-.053.32-.16.107-.107.16-.213.16-.32V10.8h-1.12c.16.533.213 1.093.16 1.68zm-3.68 2c.64 0 1.2-.24 1.68-.72s.72-1.053.72-1.72a2.56 2.56 0 0 0-.68-1.76c-.453-.507-1.013-.76-1.68-.76s-1.24.24-1.72.72-.72 1.053-.72 1.72.227 1.253.68 1.76c.453.507 1 .76 1.64.76h.08zm4.16-7.6h-1.12c-.107 0-.213.053-.32.16-.107.107-.16.213-.16.32v1.36c.107.213.267.32.48.32h1.12c.16 0 .28-.053.36-.16a.532.532 0 0 0 .12-.32v-1.2c0-.107-.053-.213-.16-.32-.107-.107-.213-.16-.32-.16zM12 0C9.813 0 7.8.533 5.96 1.6A11.793 11.793 0 0 0 1.6 5.96C.533 7.8 0 9.813 0 12s.533 4.2 1.6 6.04a11.793 11.793 0 0 0 4.36 4.36C7.8 23.467 9.813 24 12 24s4.2-.533 6.04-1.6a11.793 11.793 0 0 0 4.36-4.36C23.467 16.2 24 14.187 24 12s-.533-4.2-1.6-6.04a11.793 11.793 0 0 0-4.36-4.36C16.2.533 14.187 0 12 0zm6.24 16.88l-.08.08v.08a.926.926 0 0 1-.28.68 1.3 1.3 0 0 1-.68.36H7.52a.871.871 0 0 1-.68-.32 1.536 1.536 0 0 1-.36-.72l-.08-.16.08-9.84c0-.267.093-.507.28-.72.187-.213.413-.347.68-.4h9.68a1.3 1.3 0 0 1 .68.36 1.3 1.3 0 0 1 .36.68l.08 9.92z"></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </Grid>
          </Grid>
        </div>
        <div className="sub-footer">
          <Grid container>
            <Grid className="sub-footer_Left" container item xs={12} sm={6}>
              <div className="sub-footer_Left-item">© {fullYear} Mohammed Rezq, Inc. All Rights Reserved</div>
            </Grid>
            <Grid className="sub-footer_Right" container item xs={12} sm={6}>
            <ul className="sub-footer_list">
                <li className="sub-footer_Right-item">Guides</li>
                <li className="sub-footer_Right-item">Term of Sale</li>
                <li className="sub-footer_Right-item">Term of Use</li>
                <li className="sub-footer_Right-item">Privacy Policy</li>
              </ul>
            </Grid>
          </Grid>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
