/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import "../styles/NewsContainer.css"; // NewsContainer-specific CSS

// eslint-disable-next-line react/prop-types
const NewsContainer = ({ query }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${query}&apiKey=4717b30d28534222b752853fceb7d205`
      );
      const data = await response.json();
      setArticles(data.articles);
    };

    fetchNews();
  }, [query]);

  return (
    <main>
      <div className="cards-container">
        {articles.map((article, index) => (
          <NewsCard key={index} article={article} />
        ))}
      </div>
    </main>
  );
};

export default NewsContainer;
