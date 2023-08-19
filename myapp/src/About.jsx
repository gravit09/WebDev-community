import React from "react";
import "./about.css";
function About() {
  return (
    <div>
      <h1>About</h1>
      <figure className="snip1568">
        <figcaption>
          <h3 className="about-text">Sue Shei</h3>
          <h4 className="about-text">Founder</h4>
          <p className="about-text">
            Which is worse, that everyone has his price, or that the price is
            always so low.
          </p>
        </figcaption>
        <div className="profile-image">
          <img
            className="pf"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample2.jpg"
            alt="profile-sample2"
          />
          <div className="icons">
            <a href="#">
              <i className="ion-social-instagram" />
            </a>
            <a href="#">
              {" "}
              <i className="ion-social-twitter" />
            </a>
          </div>
        </div>
      </figure>
      <figure className="snip1568">
        <figcaption>
          <h3 className="about-text">Will Barrow</h3>
          <h4 className="about-text">Web Designer</h4>
          <p className="about-text">
            I'm killing time while I wait for life to shower me with meaning and
            happiness.
          </p>
        </figcaption>
        <div className="profile-image">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample7.jpg"
            alt="profile-sample7"
          />
          <div className="icons">
            <a href="#">
              <i className="ion-social-instagram" />
            </a>
            <a href="#">
              {" "}
              <i className="ion-social-twitter" />
            </a>
          </div>
        </div>
      </figure>
      <figure className="snip1568">
        <figcaption>
          <h3 className="about-text">Indigo Violet</h3>
          <h4 className="about-text">Public Relations</h4>
          <p className="about-text">
            The only skills I have the patience to learn are those that have no
            real application in life.{" "}
          </p>
        </figcaption>
        <div className="profile-image">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample6.jpg"
            alt="profile-sample6"
          />
          <div className="icons">
            <a href="#">
              <i className="ion-social-instagram" />
            </a>
            <a href="#">
              {" "}
              <i className="ion-social-twitter" />
            </a>
          </div>
        </div>
      </figure>
      <p className="footer">
        © Copyrights by We are devs . All rights reserved.
      </p>
    </div>
  );
}

export default About;
