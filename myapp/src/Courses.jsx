import React from "react";
import "./Courses.css"; // Import your CSS file for styling
import webyu from "./assets/web.jpg";
import max from "./assets/max.jpeg";
import jonas from "./assets/hqdefault.jpg";
import step from "./assets/step.jpeg";
import camp from "./assets/camp.jpeg";
import trav from "./assets/trav.jpeg";
import thapa from "./assets/thapa.jpeg";
import neet from "./assets/neet.jpeg";
import kunal from "./assets/kunal.jpeg";
import hitesh from "./assets/hitesh.jpeg";
import eater from "./assets/eater.jpeg";
import fire from "./assets/fireship.jpeg";

function Courses() {
  return (
    <div>
      <h1>Recommended Youtube videos</h1>
      <div className="courses-container">
        <figure className="snip1515">
          <div className="profile-image">
            <iframe
              title="React Video"
              width="350"
              height="215"
              src="https://www.youtube.com/embed/a_iQb1lnAEQ?rel=0"
              allowFullScreen
            />
          </div>
          <figcaption>
            <h3>HTML & CSS</h3>
            <p>
              A good course for basic html and css covers all the essential
              concepts of html and css
            </p>
          </figcaption>
        </figure>
        <figure className="snip1515">
          <div className="profile-image">
            <iframe
              title="HTML and CSS Video"
              width="350"
              height="215"
              src="https://www.youtube.com/embed/Tgat3-prVv4"
              allowFullScreen
            />
          </div>
          <figcaption>
            <h3>HTML & CSS Project</h3>
            <p>Build Netflix landing page using html and css</p>
          </figcaption>
        </figure>
        <figure className="snip1515">
          <div className="profile-image">
            <iframe
              title="HTML and CSS Video"
              width="350"
              height="215"
              src="https://www.youtube.com/embed/jS4aFq5-91M"
              allowFullScreen
            />
          </div>
          <figcaption>
            <h3>JavaScript</h3>
            <p>
              In this you will learn js basic and medium topic and the way of
              teaching is very interactive
            </p>
          </figcaption>
        </figure>
        <figure className="snip1515">
          <div className="profile-image">
            <iframe
              title="React"
              width="350"
              height="215"
              src="https://www.youtube.com/embed/bMknfKXIFA8"
              allowFullScreen
            />
          </div>
          <figcaption>
            <h3>React</h3>
            <p>Build Netflix landing page using html and css</p>
          </figcaption>
        </figure>

        <figure className="snip1515">
          <div className="profile-image">
            <iframe
              title="React"
              width="350"
              height="215"
              src="https://www.youtube.com/embed/GiyL4KFRNBA"
              allowFullScreen
            />
          </div>
          <figcaption>
            <h3>React</h3>
            <p>Build Netflix landing page using html and css</p>
          </figcaption>
        </figure>

        <figure className="snip1515">
          <div className="profile-image">
            <iframe
              title="React"
              width="350"
              height="215"
              src="https://www.youtube.com/embed/Hr5iLG7sUa0"
              allowFullScreen
            />
          </div>
          <figcaption>
            <h3>React</h3>
            <p>Build Netflix landing page using html and css</p>
          </figcaption>
        </figure>
      </div>
      <h1>Some good Paid Resources</h1>
      <div className="courses-container">
        <figure className="snip1515">
          <div className="profile-image">
            <img width="390" height="200" className="course-img" src={webyu} />
          </div>
          <figcaption>
            <h3>React</h3>
            <p>Build Netflix landing page using html and css</p>
          </figcaption>
        </figure>
        <figure className="snip1515">
          <div className="profile-image">
            <img width="390" height="200" className="course-img" src={max} />
          </div>
          <figcaption>
            <h3>React by maximilian Schwarzmüller</h3>
            <p>A complete course for advance React</p>
          </figcaption>
        </figure>
        <figure className="snip1515">
          <div className="profile-image">
            <img width="390" height="200" className="course-img" src={jonas} />
          </div>
          <figcaption>
            <h3>React by jonas schmedtmann</h3>
            <p>Build Netflix landing page using html and css</p>
          </figcaption>
        </figure>
      </div>
      <h4>
        Note: Don't buy udemy courses at listed usually you will get sales on
        udemy you can buy any courses below 500 rupees
      </h4>
      <h1>Some Recommended Youtube Channels</h1>
      <div className="courses-container">
        <aside className="profile-card">
          <header>
            <a href="https://tutsplus.com">
              <img className="courses" src={camp} />
            </a>
            <h1>Free Code Camp</h1>
          </header>
          <div className="profile-bio">
            <p>
              Terence is an avid reader of science fiction, especially anything
              to do with aliens and tweed jackets. Most weekends, he can be
              found cataloguing his collection of rodent skeletons.
            </p>
          </div>
        </aside>
        <aside className="profile-card">
          <header>
            <a href="https://tutsplus.com">
              <img className="courses" src={step} />
            </a>
            <h1>Code step by step</h1>
          </header>
          <div className="profile-bio">
            <p>
              Terence is an avid reader of science fiction, especially anything
              to do with aliens and tweed jackets. Most weekends, he can be
              found cataloguing his collection of rodent skeletons.
            </p>
          </div>
        </aside>
        <aside className="profile-card">
          <header>
            <a href="https://tutsplus.com">
              <img className="courses" src={thapa} />
            </a>
            <h1>Thapa Technical</h1>
          </header>
          <div className="profile-bio">
            <p>
              Terence is an avid reader of science fiction, especially anything
              to do with aliens and tweed jackets. Most weekends, he can be
              found cataloguing his collection of rodent skeletons.
            </p>
          </div>
        </aside>
        <aside className="profile-card">
          <header>
            <a href="https://tutsplus.com">
              <img className="courses" src={fire} />
            </a>
            <h1>fireship</h1>
          </header>
          <div className="profile-bio">
            <p>
              Terence is an avid reader of science fiction, especially anything
              to do with aliens and tweed jackets. Most weekends, he can be
              found cataloguing his collection of rodent skeletons.
            </p>
          </div>
        </aside>

        <aside className="profile-card">
          <header>
            <a href="https://tutsplus.com">
              <img className="courses" src={kunal} />
            </a>
            <h1>Kunal kushawa</h1>
          </header>
          <div className="profile-bio">
            <p>
              Terence is an avid reader of science fiction, especially anything
              to do with aliens and tweed jackets. Most weekends, he can be
              found cataloguing his collection of rodent skeletons.
            </p>
          </div>
        </aside>
        <aside className="profile-card">
          <header>
            <a href="https://tutsplus.com">
              <img className="courses" src={hitesh} />
            </a>
            <h1>Hitesh choudhary</h1>
          </header>
          <div className="profile-bio">
            <p>
              Terence is an avid reader of science fiction, especially anything
              to do with aliens and tweed jackets. Most weekends, he can be
              found cataloguing his collection of rodent skeletons.
            </p>
          </div>
        </aside>
        <aside className="profile-card">
          <header>
            <a href="https://tutsplus.com">
              <img className="courses" src={neet} />
            </a>
            <h1>Neet Code</h1>
          </header>
          <div className="profile-bio">
            <p>
              Terence is an avid reader of science fiction, especially anything
              to do with aliens and tweed jackets. Most weekends, he can be
              found cataloguing his collection of rodent skeletons.
            </p>
          </div>
        </aside>
        <aside className="profile-card">
          <header>
            <a href="https://tutsplus.com">
              <img className="courses" src={trav} />
            </a>
            <h1>Travery Media</h1>
          </header>
          <div className="profile-bio">
            <p>
              Terence is an avid reader of science fiction, especially anything
              to do with aliens and tweed jackets. Most weekends, he can be
              found cataloguing his collection of rodent skeletons.
            </p>
          </div>
        </aside>
        <aside className="profile-card">
          <header>
            <a href="https://tutsplus.com">
              <img className="courses" src={eater} />
            </a>
            <h1>Code Eater</h1>
          </header>
          <div className="profile-bio">
            <p>
              Terence is an avid reader of science fiction, especially anything
              to do with aliens and tweed jackets. Most weekends, he can be
              found cataloguing his collection of rodent skeletons.
            </p>
          </div>
        </aside>
      </div>
      <p>© Copyrights by We are devs . All rights reserved.</p>
    </div>
  );
}

export default Courses;
