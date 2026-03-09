import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import News from './News';

const SearchResults = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q');

  useEffect(() => {
    setPage(1);
  }, [query]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (!query || query.trim() === '') {
        setArticles([]);
        setLoading(false);
        return;
      }

      setLoading(true);
      document.title = `Search: ${query} - Taza Khabar`;

      try {
        const response = await fetch(
          `https://news-p2b3.onrender.com/api/news?q=${encodeURIComponent(query)}&page=${page}&pageSize=12`
        );

        const data = await response.json();
        const incoming = Array.isArray(data.articles) ? data.articles : [];
        setArticles(incoming);
        setHasMore(incoming.length === 12);
      } catch (error) {
        console.error('Error fetching search results:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSearchResults();
  }, [query, page]);

  const handleNext = () => setPage((prev) => prev + 1);
  const handlePrev = () => setPage((prev) => Math.max(1, prev - 1));

  return (
    <main className="search-page routes-shell">
      <div className="search-heading">
        <h2>Search Results</h2>
        <p>
          Query: <strong>{query || 'N/A'}</strong>
        </p>
      </div>

      {loading ? (
        <div className="countdown-note">Loading search results...</div>
      ) : (
        <>
          <section className="news-grid">
            {articles.length > 0 ? (
              articles.map((article, index) => (
                <News
                  key={`${article.url}-${index}`}
                  title={article.title ? article.title.slice(0, 88) : 'Untitled Story'}
                  description={article.description ? article.description.slice(0, 140) : 'No summary available for this story.'}
                  imageUrl={
                    article.urlToImage && article.urlToImage !== 'null'
                      ? article.urlToImage
                      : 'https://www.woodpro.com/images/drawings/web/no_image.png'
                  }
                  newsUrl={article.url}
                  publishedAt={article.publishedAt}
                  author={article.author}
                  source={article.source?.name}
                />
              ))
            ) : (
              <div className="countdown-note">No articles found for this query.</div>
            )}
          </section>

          <div className="controls-wrap">
            <button className="btn action-btn" onClick={handlePrev} disabled={page === 1}>
              Previous
            </button>
            <button className="btn action-btn" onClick={handleNext} disabled={!hasMore}>
              Next
            </button>
          </div>
        </>
      )}
    </main>
  );
};

export default SearchResults;