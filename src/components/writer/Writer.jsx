import React from "react";
import AiCard from "../ai-card/AiCard";
import { MdEmail, MdArticle } from "react-icons/md";
import { AiOutlineFileSearch } from "react-icons/ai";
import { RiArticleLine } from "react-icons/ri";
import { IoShareSocialSharp } from "react-icons/io5";
import { motion } from "framer-motion";
import "./writer.css";

const fadeInVariants = {
  hidden: {
    opacity: 0,
    x: 100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.1,
      duration: 1,
    },
  },
};

const Writer = () => {
  return (
    <div className="writer section__padding" id="writer">
      <div className="writer__header">
        <h1 className="gradient__text">Save Time Your Content</h1>
        <p>
          Say goodbye to the blank screen dilemma. Conquer any writing challenge
          effortlessly with the assistance of our AI text generator
        </p>
      </div>
      <motion.div
        variants={fadeInVariants}
        initial="hidden"
        whileInView="visible"
        className="writer__card"
      >
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
      </motion.div>
    </div>
  );
};

export default Writer;
