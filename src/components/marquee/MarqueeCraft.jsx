import React from "react";
import Craft from "../craft/Craft";
import {
  FaYoutube,
  FaSquareInstagram,
  FaLinkedin,
  FaFacebook,
  FaParagraph,
} from "react-icons/fa6";
import { MdEmail, MdArticle } from "react-icons/md";
import { FaFilePdf } from "react-icons/fa";
import Marquee from "react-fast-marquee";
import "./marqueecraft.css";

const MarqueeCraft = () => {
  return (
    <div className="marquee__craft">
      <div>
        <Marquee className="marquee">
          <Craft icon={<FaFacebook />} text="Facebook Ads" />
          <Craft icon={<FaLinkedin />} text="Linkedin Headlines" />
          <Craft icon={<FaYoutube />} text="Youtube Title" />
          <Craft icon={<FaSquareInstagram />} text="Instagram Hashtags" />
          <Craft icon={<FaParagraph />} text="Paragraph Generator" />
          <Craft icon={<MdArticle />} text="Article Rewriter" />
          <Craft icon={<FaFilePdf />} text="PDF Summarizers" />
          <Craft icon={<MdArticle />} text="Essay Shortener" />
          <Craft icon={<MdEmail />} text="Resignation Email" />
          <Craft icon={<FaYoutube />} text="Youtube Descriptions" />
          <Craft icon={<MdArticle />} text="CV Writer" />
          <Craft icon={<FaLinkedin />} text="Linkedin Bios" />
        </Marquee>
      </div>
    </div>
  );
};

export default MarqueeCraft;
