import React, { useState, useEffect } from "react";
import { MdOutlineLink } from "react-icons/md";
import { FaArrowUp } from "react-icons/fa";
import { FaRegCopy } from "react-icons/fa";
import loader from "../../assets/loader.svg";
import { motion } from "framer-motion";
import { useLazyGetSummaryQuery } from "../../services/article";
import "./demo.css";

const fadeInVariants = {
  hidden: {
    opacity: 0,
    x: 200,
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

const Demo = () => {
  const [article, setArticle] = useState({
    url: "",
    summary: "",
  });

  const [allArticles, setAllArticles] = useState([]);
  const [copied, setCopied] = useState("");

  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

  useEffect(() => {
    const articlesFromLocalStorage = JSON.parse(
      localStorage.getItem("articles")
    );

    if (articlesFromLocalStorage) {
      setAllArticles(articlesFromLocalStorage);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await getSummary({ articleUrl: article.url });
    if (data?.summary) {
      const newArticle = { ...article, summary: data.summary };
      const updatedAllArticles = [newArticle, ...allArticles];
      setArticle(newArticle);
      setAllArticles(updatedAllArticles);

      localStorage.setItem("articles", JSON.stringify(updatedAllArticles));
      console.log(newArticle);
    }
  };

  const handleCopy = (copyUrl) => {
    setCopied(copyUrl);
    navigator.clipboard.writeText(copyUrl);
    setTimeout(() => setCopied(false), 3000);
  };
  return (
    <div className="demo gradient__bg section__padding">
      <h1 className="gradient__text demo__header ">Summarize Articles</h1>
      <p className="demo__header-text">
        Make your reading easier with our summarization tool. This article
        summarizer simplifies lengthy articles into clear and concise summaries.
      </p>
      <motion.div
        variants={fadeInVariants}
        initial="hidden"
        whileInView="visible"
        className="demo__container"
      >
        <div>
          <form action=" " onSubmit={handleSubmit} className="demo__form">
            <div className="demo__link">
              <MdOutlineLink color="hsl(21, 43%, 44%)" />
              <input
                type="url"
                placeholder="Enter a URL"
                value={article.url}
                onChange={(e) =>
                  setArticle({ ...article, url: e.target.value })
                }
                required
                className="url__input peer"
              />
            </div>
            <button type="submit" className="submit__btn">
              <FaArrowUp />
            </button>
          </form>

          {/*Browse URL History */}
          <div className="url__history">
            {allArticles.map((item, index) => (
              <div
                key={`link-${index}`}
                onClick={() => setArticle(item)}
                className="link__card"
              >
                <div className="url__copy" onClick={() => handleCopy(item.url)}>
                  <FaRegCopy size={25} className="copy__icon" />
                  <p>{item.url}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Dispaly Result*/}
        <div>
          {" "}
          {isFetching ? (
            <img src={loader} alt="loader" className="loader__svg" />
          ) : error ? (
            <p>
              Error, That wasn't suppose to happen <br />{" "}
              <span>{error?.data?.error}</span>
            </p>
          ) : (
            article.summary && (
              <div className="article__summary">
                <h2 className="text__center">Article Summary</h2>
                <div>
                  <p>{article.summary}</p>
                </div>
              </div>
            )
          )}
        </div>
      </motion.div>
    </div>
  );
};
export default Demo;
