import React from "react";
import "./Courses.css";
import discord from "./assets/discord.png";
import telegran from "./assets/telegram.png";
import insta from "./assets/insta.png";

function Join() {
  return (
    <div>
      <div className="courses-container">
        <aside className="profile-card dis">
          <header>
            <a href="https://tutsplus.com">
              <img className="about" src={discord} />
            </a>
            <h1>Join our Discord</h1>
          </header>
          <div className="profile-bio ">
            <p>
              Join community of developers and collobrate with other developers
            </p>
          </div>
        </aside>
        <aside className="profile-card insta dis">
          <header>
            <a href="https://tutsplus.com ">
              <img className="about" src={insta} />
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
        <aside className="profile-card dis">
          <header>
            <a href="https://tutsplus.com">
              <img className="about" src={telegran} />
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
      </div>
      <p className="footer">
        © Copyrights by We are devs . All rights reserved.
      </p>
    </div>
  );
}

export default Join;
