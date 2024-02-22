import React from "react";

import AiCard from "../ai-card/AiCard";
import { MdEmail, MdArticle } from "react-icons/md";
import { AiOutlineFileSearch } from "react-icons/ai";
import { RiArticleLine } from "react-icons/ri";
import { IoShareSocialSharp } from "react-icons/io5";

import "./writer.css";

const Writer = () => {
  return (
    <div className="writer" id="writer">
      <div className="writer__header">
        <h1 className="gradient__text">Save Time Your Content</h1>
        <p>
          Say goodbye to the blank screen dilemma. Conquer any writing challenge
          effortlessly with the assistance of our AI text generator
        </p>
      </div>
      <div className="writer__card">
        <AiCard
          icon={<MdArticle />}
          heading="Article Rewrite"
          text="Generate alternative versions of lengthy articles by utilizing distinct vocabulary and restructuring the content."
        />
        <AiCard
          icon={<RiArticleLine />}
          heading="Text Summarize"
          text="Condense extensive content into succinct summaries while retaining essential context."
        />
        <AiCard
          icon={<MdEmail />}
          heading="Email Content"
          text="Compose precise and succinct business emails to streamline work efficiently."
        />
        <AiCard
          icon={<AiOutlineFileSearch />}
          heading="Plagiarism Check"
          text="
          ChatGPT
          The integrated plagiarism checker examines content for replicated text, ensuring its authenticity."
        />
        <AiCard
          icon={<IoShareSocialSharp />}
          heading="Social Content"
          text="Develop attention-grabbing content for social media"
        />
        <AiCard
          icon={<AiOutlineFileSearch />}
          heading="Proofread"
          text="eview and refine your writing, eliminating any grammar and spelling mistakes."
        />
      </div>
    </div>
  );
};

export default Writer;
