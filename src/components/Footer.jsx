import React from "react";

import "./Footer.css";

import SendIcon from '@mui/icons-material/Send';

function Footer() {

  const year = new Date().getFullYear();


  return (
    <footer id="footer">
      <div className="footer__container">
        <div className="footer__container__left">
          <h3>Ravi Raj</h3>
          <p>
            We believe in <strong>Simple</strong>, <strong>Clean</strong> &{" "}
            <strong>Modern</strong> Design Standerds With Responsive Approach.
            Browse the amazing work of our company.
          </p>

          <div id="contact__info">
            <address>
              <h3 className="contact__info__heading">Headquarters</h3>

              <p>221 Jockey Hollow,Suite 600</p>
              <p>Smithtown,NY 11787</p>
            </address>

            <div id="phone__fax__email">
              <p>
                <strong>Phone: </strong>
                <span> (91) 98********</span>
                <br />

                <strong>Email: </strong>
                <span> rj*****@gmail.com</span>
                <br />
              </p>
            </div>
          </div>

          <ul className="social__list">
            <li>
              <a href="s" className="social__icon__white">
                <i class="fa fa-facebook"></i>
              </a>
            </li>

            <li>
              <a href="s" className="social__icon__white">
                <i class="fa fa-youtube-play"></i>
              </a>
            </li>

            <li>
              <a href="s" className="social__icon__white">
                <i class="fa fa-twitter"></i>
              </a>
            </li>

            <li>
              <a href="s" className="social__icon__white">
                <i class="fa fa-google-plus"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__container__right">
          <h3>Contact Us</h3>

          <form action="">
            {/* HERE ACTION ATTRIBUTE IS USED TO ADRESSING THE ADDRESS WHERE WE WANT TO SEND THE FORM DATA. AND # MEANS NOTHING */}

            <input
              type="text"
              name="full-name"
              placeholder="Full Name"
              class="form-control"
            />

            <input
              type="text"
              name="email"
              placeholder="Email Adress"
              class="form-control"
            />

            <textarea
              rows="5"
              name="message"
              placeholder="Message..."
              class="form-control"
            ></textarea>

            <div id="send__btn">
                <SendIcon className="send__btn"/>
            </div>
          </form>
        </div>
      </div>
      <div className="footer__lower">
        <div className="footer__lower__left">
        <div>
          <p>Copyright © {year}</p>
        </div>
          
        </div>

        {/* <div className="footer__lower__right">
          <div id="footer__menu">
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#my__works">Work</a>
              </li>
              <li>
                <a href="#team">Team</a>
              </li>
              <li>
                <a href="#testimonial">Testimonials</a>
              </li>
              <li>
                <a href="#pricing">Pricing</a>
              </li>
              <li>
                <a href="#stats">Stats</a>
              </li>
            </ul>
          </div>
        </div> */}
      </div>
    </footer>
  );
}

export default Footer;
