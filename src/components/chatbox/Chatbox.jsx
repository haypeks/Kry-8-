import React, { useState } from "react";
import agent from "../../assets/agent.png";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { LiaTimesSolid } from "react-icons/lia";
import "./chatbox.css";

const Chatbox = () => {
  const [chatBox, setchatBox] = useState(false);
  return (
    <div className="chatbox section__padding">
      <div
        className="chatbox__menu
      "
      >
        {chatBox ? (
          <LiaTimesSolid
            class="chatbox__icon"
            size={60}
            onClick={() => setchatBox(false)}
          />
        ) : (
          <IoChatbubbleEllipsesOutline
            class="chatbox__icon"
            size={60}
            onClick={() => setchatBox(true)}
          />
        )}
        {chatBox && (
          <div className="chatbox__container">
            <div className="chatbox__container-header">
              <img src={agent} alt="" />
              <h3>How can we help?</h3>
              <p>We usually respond in a few hours</p>
            </div>
            <form method="POST">
              <input type="text" name="name" placeholder="Name" required />
              <input
                type="text"
                name="subject"
                placeholder="subject"
                required
              />
              <input type="email" name="email" placeholder="Email" required />
              <textarea
                name="message"
                rows="5"
                placeholder="How can we help"
                required
              ></textarea>
              <button className="">Submit</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chatbox;
