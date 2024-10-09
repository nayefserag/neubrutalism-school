import React from "react";
import {
  faEnvelope,
  faMapLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons"; // Import the email icon from solid icons
import styles from "./page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Image from 'next/image';
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container1}>
        <div className={styles.subcontainer1}>
          <div className={styles.subsubcontainer1}>
            <Image
              src="/Logos/Logo.png"
              alt="Website Logo"
              width={228.37}
              height={50}
            />
            <p className={styles.paragraph}>
              We believe in the power of play to foster creativity,
              problem-solving skills, and imagination.
            </p>
          </div>
          <div className={styles.butonsubcontainer}>
            <div className={styles.buttons}>
              <FontAwesomeIcon
                icon={faEnvelope}
                size="2x"
                className={styles.icon}
              />
              <a
                href="https://www.bing.com/search?q=Nayf+Serag&cvid=687f94f4687e4d80bc14e305d4da0343&gs_lcrp=EgZjaHJvbWUqBggAEAAYQDIGCAAQABhAMgYIARBFGD0yBggCEEUYPTIGCAMQRRg80gEINTc5MWowajmoAgiwAgE&FORM=ANAB01&adppc=EDGEXST&PC=SCOOBE"
                className={styles.textbutton}
              >
                nayfserag@outlook.com
              </a>
            </div>
            <div className={styles.buttons}>
              <FontAwesomeIcon
                icon={faPhone}
                size="2x"
                className={styles.icon}
              />
              <a
                href="https://www.bing.com/search?q=Nayf+Serag&cvid=687f94f4687e4d80bc14e305d4da0343&gs_lcrp=EgZjaHJvbWUqBggAEAAYQDIGCAAQABhAMgYIARBFGD0yBggCEEUYPTIGCAMQRRg80gEINTc5MWowajmoAgiwAgE&FORM=ANAB01&adppc=EDGEXST&PC=SCOOBE"
                className={styles.textbutton}
              >
                +201016022217
              </a>
            </div>
            <div className={styles.buttons}>
              <FontAwesomeIcon
                icon={faMapLocationDot}
                size="2x"
                className={styles.icon}
              />
              <a
                href="https://www.google.com.eg/maps/@30.801074,30.9612543,11z?entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D"
                className={styles.textbutton}
              >
                Cairo, Egypt
              </a>
            </div>
          </div>
        </div>

        <div className={styles.subcontainer2}>
          <div className={styles.link}>
            <h1 className={styles.headinglink}>Home</h1>
            <div className={styles.divider}>
              <text className={styles.texts}>Features</text>
              <text className={styles.texts}>Our Testimonials</text>
              <text className={styles.texts}>FAQ</text>
            </div>
          </div>

          <div className={styles.link}>
            <h1 className={styles.headinglink}>About Us</h1>
            <div className={styles.divider}>
              <text className={styles.texts}>Our Mission</text>
              <text className={styles.texts}>Our Vision</text>
              <text className={styles.texts}>Awards and Recognitions</text>
              <text className={styles.texts}>History</text>
              <text className={styles.texts}>Teachers</text>
            </div>
          </div>
          <div className={styles.link}>
            <h1 className={styles.headinglink}>Acodemics</h1>
            <div className={styles.divider}>
              <text className={styles.texts}>Special Features</text>
              <text className={styles.texts}>Gallery</text>
            </div>
          </div>
          <div className={styles.link}>
            <h1 className={styles.headinglink}>Contact Us</h1>
            <div className={styles.divider}>
              <text className={styles.texts}>Information</text>
              <text className={styles.texts}>Map & Direction</text>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container2}>
        <div className={styles.divider2}></div>

        <div className={styles.subdivider}>
          <div className={styles.normaltext323232}>
            <a href="/terms-of-service" className={styles.normaltext}>
              Terms of Service
            </a>
            <span>|</span>
            <a href="/privacy-policy" className={styles.normaltext}>
              Privacy Policy
            </a>
            <span>|</span>
            <a href="/cookie-policy" className={styles.normaltext}>
              Cookie Policy
            </a>
          </div>

          <div className={styles.dividervertical}>
            <div className={styles.button7}>
              <a
                href="https://www.bing.com/search?q=Nayf+Serag&cvid=687f94f4687e4d80bc14e305d4da0343&gs_lcrp=EgZjaHJvbWUqBggAEAAYQDIGCAAQABhAMgYIARBFGD0yBggCEEUYPTIGCAMQRRg80gEINTc5MWowajmoAgiwAgE&FORM=ANAB01&adppc=EDGEXST&PC=SCOOBE"
                className={styles.textbutton}
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  size="2x"
                  className={styles.icon}
                />
              </a>
            </div>
            <div className={styles.button7}>
              <a
                href="https://www.bing.com/search?q=Nayf+Serag&cvid=687f94f4687e4d80bc14e305d4da0343&gs_lcrp=EgZjaHJvbWUqBggAEAAYQDIGCAAQABhAMgYIARBFGD0yBggCEEUYPTIGCAMQRRg80gEINTc5MWowajmoAgiwAgE&FORM=ANAB01&adppc=EDGEXST&PC=SCOOBE"
                className={styles.textbutton}
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  size="2x"
                  className={styles.icon}
                />
              </a>
            </div>
            <div className={styles.button7}>
              <a
                href="https://www.bing.com/search?q=Nayf+Serag&cvid=687f94f4687e4d80bc14e305d4da0343&gs_lcrp=EgZjaHJvbWUqBggAEAAYQDIGCAAQABhAMgYIARBFGD0yBggCEEUYPTIGCAMQRRg80gEINTc5MWowajmoAgiwAgE&FORM=ANAB01&adppc=EDGEXST&PC=SCOOBE"
                className={styles.textbutton}
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  size="2x"
                  className={styles.icon}
                />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.divider3}></div>

        <text className={styles.texts3}>
          Copyright © [2023] Little Learners Academy. All rights reserved.
        </text>
      </div>
    </footer>
  );
};

export default Footer;
