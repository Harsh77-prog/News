// components/SearchResults.js
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import News from './News';

const SearchResults = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  const query = new URLSearchParams(location.search).get('q');

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (!query || query.trim() === "") return;

      setLoading(true);
      try {
        console.log("Searching for:", query); // ✅ log to check
       const response = await fetch(
  `https://news-p2b3.onrender.com/api/news?q=${encodeURIComponent(query)}&page=1&pageSize=12`
);


        const data = await response.json();
        console.log("Data returned:", data); // ✅ see what's returned

        setArticles(data.articles || []);
      } catch (error) {
        console.error('Error fetching search results:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSearchResults();
  }, [query]);

  return (
    <div>
      <br />
      <h2 className="text-center mb-4">
        🔍 Search Results for: <strong>{query}</strong>
      </h2>
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div className="d-flex flex-wrap justify-content-center">
          {articles.length > 0 ? (
            articles.map((article, index) => (
              <News
                key={index}
                title={article.title}
                description={article.description}
                imageUrl={
                  article.urlToImage && article.urlToImage !== 'null'
                    ? article.urlToImage
                    : 'https://www.woodpro.com/images/drawings/web/no_image.png'
                }
                newsUrl={article.url}
                publishedAt={article.publishedAt}
                author={article.author}
              />
            ))
          ) : (
            <p className="text-center">No articles found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
