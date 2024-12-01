import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import NewsCard from "./components/NewsCard";
import "../src/App.css";

const API_KEY = "4717b30d28534222b752853fceb7d205";
const url = "https://newsapi.org/v2/everything?q=";

const App = () => {
  const [query, setQuery] = useState("India");
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchNews(query);
  }, [query]);

  const fetchNews = async (query) => {
    const res = await fetch(`${url}${query}&apiKey=${API_KEY}`);
    const data = await res.json();
    setArticles(data.articles);
  };

  return (
    <div>
      <Navbar setQuery={setQuery} />
      <main>
        <div className="cards-container container flex">
          {articles.map((article, index) => (
            <NewsCard key={index} article={article} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;
