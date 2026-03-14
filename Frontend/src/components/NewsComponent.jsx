import React, { Component } from 'react';
import News from './News';
import Banner from './banner';
import Proptypes from 'prop-types';
import TopButton from './topButton';
import Cloud from './cloud';
import '../App.css';

export default class NewsComponent extends Component {
  static defaultProps = {
    country: 'us',
    category: 'business',
  };

  static propTypes = {
    country: Proptypes.string,
    category: Proptypes.string,
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      page: 1,
      loading: true,
      countdown: 30,
    };
    this.countdownInterval = null;
  }

  componentDidMount() {
    this.startCountdown();
    this.fetchArticles();
    document.title = `${this.props.category.toUpperCase()} - Taza Khabar`;
  }

  componentWillUnmount() {
    clearInterval(this.countdownInterval);
  }

  startCountdown = () => {
    this.countdownInterval = setInterval(() => {
      this.setState((prev) => {
        if (prev.countdown <= 1) {
          clearInterval(this.countdownInterval);
          return { countdown: 0 };
        }
        return { countdown: prev.countdown - 1 };
      });
    }, 1000);
  };

  fetchArticles = async (reset = false) => {
    const { page } = this.state;
    this.setState({ loading: true });
    this.props.setProgress(10);

    try {
      const response = await fetch(
        `https://news-p2b3.onrender.com/api/news?country=${this.props.country}&category=${this.props.category}&page=${page}&pageSize=12`
      );
      this.props.setProgress(35);
      const data = await response.json();

      if (!Array.isArray(data.articles)) {
        console.error('Unexpected API response:', data);
        this.setState({ loading: false });
        return;
      }

      this.props.setProgress(65);
      this.setState((prevState) => ({
        articles: reset ? data.articles : [...prevState.articles, ...data.articles],
        loading: false,
        countdown: 0,
      }));
      clearInterval(this.countdownInterval);
      this.props.setProgress(100);
    } catch (error) {
      console.error('Error fetching news:', error);
      this.setState({ loading: false });
      this.props.setProgress(100);
    }
  };

  handleLoadMore = () => {
    this.setState(
      (prevState) => ({ page: prevState.page + 1 }),
      () => this.fetchArticles()
    );
  };

  handleLoadless = () => {
    if (this.state.page > 1) {
      this.setState(
        (prevState) => ({ page: prevState.page - 1 }),
        () => this.fetchArticles(true)
      );
    }
  };

  render() {
    const { articles, loading, countdown, page } = this.state;
    const todayDate = new Date().toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });

    return (
      <main className="news-main routes-shell">
        <Banner articles={articles} />
        <Cloud category={this.props.category} />

        {countdown > 0 && (
          <div className="countdown-note">
            Fetching verified updates. Estimated wait: <strong>{countdown}s</strong>
          </div>
        )}

        <section className="news-grid">
          {articles.map((article, index) => (
            <News
              key={`${article.url}-${index}`}
              title={article.title ? article.title.slice(0, 88) : 'Untitled Story'}
              description={article.description ? article.description.slice(0, 140) : 'No summary available for this story.'}
              imageUrl={article.urlToImage || 'https://via.placeholder.com/600x400.png?text=No+Image'}
              newsUrl={article.url}
              publishedAt={article.publishedAt}
              author={article.author}
              source={article.source?.name}
              isAboveFold={index < 2}
            />
          ))}
        </section>

        <div className="controls-wrap">
          <button className="btn action-btn" onClick={this.handleLoadless} disabled={loading || page === 1}>
            {loading ? 'Loading...' : 'Previous Page'}
          </button>
          <button className="btn action-btn" onClick={this.handleLoadMore} disabled={loading}>
            {loading ? 'Loading...' : 'Load More'}
          </button>
        </div>

        <TopButton />

        <footer className="app-footer">
          <p>Powered by NewsAPI.org</p>
          <p>Taza Khabar, {todayDate}</p>
          <p>Journal-grade feed for daily readers.</p>
        </footer>
      </main>
    );
  }
}
