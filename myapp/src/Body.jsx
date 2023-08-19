import React from "react";
import collabrate from "./assets/collabrate.png";
import inovate from "./assets/innovate.png";
import together from "./assets/together.webp";
import coder from "./assets/coder.png";
import Join from "./Join";
import "./index.css";
function Body() {
  return (
    <div className="motto">
      <div className="container">
        <div className="row">
          <h1 className="headings">Empowerment through Collaboration</h1>
          <div className="col-lg-6 order-lg-1 ">
            <img className="collab-img" src={collabrate} alt="collabrate-img" />
          </div>
          <div className="col-lg-6 order-lg-2">
            <p className="item-p">
              Amidst our dynamic digital community, web developers harmoniously
              unite, nurturing collaboration and knowledge exchange. Together,
              we foster empowerment, propelling collective growth and innovation
              within a supportive tapestry. This interconnected space amplifies
              each voice, yielding an environment where aspirations flourish and
              achievements are shared. As we forge pathways of advancement, we
              understand that our united journey is the cornerstone of our
              collective success.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <h1 className="headings">Innovate, Iterate, Elevate</h1>
          <div className="col-lg-6 order-lg-2">
            <img src={inovate} className="right-img" alt="innovate-img" />
          </div>
          <div className="col-lg-6 order-lg-1 animate-from-left">
            <p className="item-p">
              Within our dynamic digital enclave, we ignite a perpetual cycle of
              innovation and refinement. Here, members ardently iterate on
              projects, ideas, and skills, propelling us to new pinnacles of
              excellence. This relentless pursuit of advancement forms the very
              core of our ethos, creating a space where growth is constant,
              achievements are celebrated, and the journey itself becomes a
              testament to our collective dedication.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <h1 className="headings">Hack Together, Learn Forever</h1>
          <div className="col-lg-6 order-lg-1 ">
            <img className="together-img" src={together} alt="collabrate-img" />
          </div>
          <div className="col-lg-6 order-lg-2">
            <p className="item-p">
              At the heart of our mission lies the advocacy for collaborative
              problem-solving. Here, our members synergize their efforts to hack
              through challenges, drawing strength from the diversity of
              perspectives that converge. Within this dynamic crucible, a
              profound commitment to lifelong learning thrives, propelling us
              ever forward on a path of discovery and mastery. This ethos not
              only fuels our collective achievements but also serves as a
              testament to the enduring spirit of innovation that defines our
              community.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <h1 className="headings">From Novice to Ninja</h1>
          <div className="col-lg-6 order-lg-2">
            <img src={coder} className="right-img" alt="innovate-img" />
          </div>
          <div className="col-lg-6 order-lg-1 animate-from-left">
            <p className="item-p">
              We take pride in cultivating a nurturing environment where
              newcomers are embraced and empowered on their quest to evolve into
              skilled web development ninjas. Our seasoned mentors provide
              unwavering guidance, helping forge a pathway illuminated by
              experience and wisdom. Together, we weave a tapestry of growth,
              where every step taken is a testament to the transformative power
              of mentorship and collaborative learning.
            </p>
          </div>
        </div>
      </div>
      <h1>Join us</h1>
      <Join />
    </div>
  );
}

export default Body;
