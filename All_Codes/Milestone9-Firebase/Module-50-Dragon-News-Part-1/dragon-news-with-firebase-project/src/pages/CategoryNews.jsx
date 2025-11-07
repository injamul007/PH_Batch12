import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../components/NewsCard";

const CategoryNews = () => {
  const [categoryNews, setCategoryNews] = useState([]);

  const { id } = useParams();
  const numId = Number(id);

  const data = useLoaderData();

  useEffect(() => {
    if (numId === 0) {
      setCategoryNews(data);
      return;
    } else if (numId === 1) {
      const filteredNewsB = data.filter((news) => news.others.is_today_pick === true);
      setCategoryNews(filteredNewsB)
    } else {
      const filteredNews = data.filter((news) => news.category_id === numId);
      setCategoryNews(filteredNews);
    }
  }, [data, numId]);

  return (
    <div>
      <h1 className="font-bold text-accent">Total <span className="text-secondary">({categoryNews.length})</span> News Found</h1>
      <div className="grid grid-cols-1 gap-4">
        {
          categoryNews.map(news => <NewsCard key={news.id} news={news}></NewsCard>)
        }
      </div>
    </div>
  );
};

export default CategoryNews;
