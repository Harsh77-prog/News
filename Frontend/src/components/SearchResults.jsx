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
      if (!query) return;
      setLoading(true);
      try {
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=${query}&apiKey=a357ea6769b74f1aab223a55091eaf91&pageSize=12`
        );
        const data = await response.json();
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
    <div >
        <br></br>
      <h2 className="text-center mb-4">🔍 Search Results for: <strong>{query}</strong></h2>
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
