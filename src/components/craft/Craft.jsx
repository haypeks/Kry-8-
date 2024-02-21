import React from "react";
import {
  FaYoutube,
  FaSquareInstagram,
  FaLinkedin,
  FaFacebook,
  FaParagraph,
} from "react-icons/fa6";
import { MdEmail, MdArticle } from "react-icons/md";
import { FaFilePdf } from "react-icons/fa";
import "./craft.css";
import Marquee from "react-fast-marquee";

const Craft = () => {
  return (
    <div className="craft">
      <div>
        <h1 className="gradient__text">Endless Inspiration Awaits You</h1>
        <Marquee className="marquee">
          <div className="marquee__craft">
            <div className="marquee__icon">
              <FaFacebook size={0} />
            </div>
            Facebook Ads
          </div>
          <div className="marquee__craft">
            <div className="marquee__icon">
              <FaYoutube size={0} />
            </div>
            Youtube Title
          </div>
          <div className="marquee__craft">
            <div className="marquee__icon">
              <FaLinkedin size={0} />
            </div>
            Linkedin Headlines
          </div>
          <div className="marquee__craft">
            <div className="marquee__icon">
              <FaSquareInstagram size={0} />
            </div>
            Instagram Hashtags
          </div>
          <div className="marquee__craft">
            <div className="marquee__icon">
              <FaParagraph size={0} />
            </div>
            ParagrapH Generator
          </div>
          <div className="marquee__craft">
            <div className="marquee__icon">
              <MdArticle />
            </div>
            Artilce Rewriter
          </div>
          <div className="marquee__craft">
            <div className="marquee__icon">
              <FaFilePdf />
            </div>
            PDF Summarizers
          </div>
          <div className="marquee__craft">
            <div className="marquee__icon">
              <MdArticle />
            </div>
            Essay Shortener
          </div>
          <div className="marquee__craft">
            <div className="marquee__icon">
              <FaFacebook />
            </div>
            Facebook Bios
          </div>
          <div className="marquee__craft">
            <div className="marquee__icon">
              <FaYoutube />
            </div>
            Youtube Descriptions
          </div>
          <div className="marquee__craft">
            <div className="marquee__icon">
              <MdEmail />
            </div>
            Resignation Email
          </div>
          <div className="marquee__craft">
            <div className="marquee__icon">
              <FaSquareInstagram />
            </div>
            Instagram Caption
          </div>
          <div className="marquee__craft">
            <div className="marquee__icon">
              <MdArticle />
            </div>
            Story Writer
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Craft;
