import React from "react";

const NewsCard = ({ article }) => {
  const { urlToImage, title, description, source, publishedAt, url } = article;
  const date = new Date(publishedAt).toLocaleString("en-US", { timeZone: "Asia/Jakarta" });

  return (
    <div className="card">
      <div className="card-header">
        <img src={urlToImage || "https://via.placeholder.com/400x200"} alt="news-image" />
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        <h6 className="news-source">{source.name} · {date}</h6>
        <p className="news-desc">{description}</p>
      </div>
      <button onClick={() => window.open(url, "_blank")} className="card-link">Read More</button>
    </div>
  );
};

export default NewsCard;
