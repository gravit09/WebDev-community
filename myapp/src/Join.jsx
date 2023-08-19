import React from "react";
import "./Courses.css";
import discord from "./assets/discord.png";
import telegran from "./assets/telegram.png";
import insta from "./assets/insta.png";

function Join() {
  return (
    <div>
      <div className="bottom-container">
        <div className="social-icons">
          <img className="social-icon discord" src={discord} />
          <img className="social-icon telegram" src={telegran} />
          <img className="social-icon insta" src={insta} />
        </div>
      </div>
      <p className="footer">
        © Copyrights by We are devs . All rights reserved.
      </p>
    </div>
  );
}

export default Join;
