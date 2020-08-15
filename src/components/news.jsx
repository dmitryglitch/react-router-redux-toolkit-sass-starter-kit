import React from "react";

const news = ({ newsData }) => {
  return (
    <div className="news-item">
      <a target="_blank" href={newsData.url}>
        <div className="news-item__title">
          <p>{newsData.title}</p>
        </div>
        <div className="news-item__description">
          <p>{newsData.description}</p>
        </div>
      </a>
    </div>
  );
};

export default news;
