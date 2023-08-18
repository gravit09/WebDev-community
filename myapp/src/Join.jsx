import React from "react";
import "./Courses.css";
import discord from "./assets/discord.png";
import telegran from "./assets/telegram.png";

function Join() {
  return (
    <div>
      <aside className="profile-card">
        <header>
          <a href="https://tutsplus.com">
            <img src={discord} />
          </a>
          <h1>Code step by step</h1>
        </header>
        <div className="profile-bio">
          <p>
            Terence is an avid reader of science fiction, especially anything to
            do with aliens and tweed jackets. Most weekends, he can be found
            cataloguing his collection of rodent skeletons.
          </p>
        </div>
      </aside>
      <p className="footer">
        © Copyrights by We are devs . All rights reserved.
      </p>
    </div>
  );
}

export default Join;
