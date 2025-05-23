import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import News from './News';

const SearchResults = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1); // new page state
  const [hasMore, setHasMore] = useState(true); // to track if next page exists

  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q');

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (!query || query.trim() === '') return;

      setLoading(true);
      try {
        const response = await fetch(
          `https://news-p2b3.onrender.com/api/news?q=${encodeURIComponent(query)}&page=${page}&pageSize=12`
        );

        const data = await response.json();
        setArticles(data.articles || []);
        setHasMore(data.articles && data.articles.length === 12); // assume 12 means more pages exist
      } catch (error) {
        console.error('Error fetching search results:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSearchResults();
  }, [query, page]); // react to page change

  const handleNext = () => setPage((prev) => prev + 1);
  const handlePrev = () => setPage((prev) => Math.max(1, prev - 1));

  return (
    <div className="container py-4">
      <h2 className="text-center mb-4">
        🔍 Search Results for: <strong>{query}</strong>
      </h2>

      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <>
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

          {/* Pagination Controls */}
          <div className="d-flex justify-content-center mt-4 gap-3">
            <button
              className="btn btn-outline-primary"
              onClick={handlePrev}
              disabled={page === 1}
            >
              ← Previous
            </button>

            <span className="align-self-center">Page {page}</span>

            <button
              className="btn btn-outline-primary"
              onClick={handleNext}
             
            >
              Next →
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default SearchResults;
