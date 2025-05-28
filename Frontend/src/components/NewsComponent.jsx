import React, { Component } from 'react';
import News from './News';
import Banner from './banner'; // Make sure to use the correct component name
import Proptypes from 'prop-types';
import TopButton from './topButton';
import Cloud from './cloud'


export default class NewsComponent extends Component {

  static defaultProps = {
    country: '',
    category: 'business',
    
  };
  static propTypes ={
    country: Proptypes.string,
    category: Proptypes.string,
    
  };
  constructor() {
    super();
    this.state = {
      articles: [],
      page: 1,
      loading: true,
    };
  
  }

  componentDidMount() {
    this.fetchArticles();
  }

  fetchArticles = async (reset = false) => {
    const { page } = this.state;
    this.setState({ loading: true });
    this.props.setProgress(10);
    
    
   
    try {
      // If your backend runs locally on 5000:

const response = await fetch(
  `https://news-p2b3.onrender.com
/api/news?country=${this.props.country}&category=${this.props.category}&page=${page}&pageSize=12`
);
      this.props.setProgress(30);
      const data = await response.json();
      if (!Array.isArray(data.articles)) {
        console.error('Unexpected API response:', data);
        this.setState({ loading: false });
        return;
      }
      this.props.setProgress(60);
      this.setState((prevState) => ({
        articles: reset ? data.articles : [...prevState.articles, ...data.articles],
        loading: false,
      }));
    this.props.setProgress(80);
    this.props.setProgress(100);
    } catch (error) {
      console.error('Error fetching news:', error);
      this.setState({ loading: false });
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
        () => this.fetchArticles(true) // reset = true
      );
    }
  };
  
  render() {
    const { articles, loading } = this.state;
    const todayDate = new Date().toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
    document.title = `${this.props.category.toUpperCase()} - Taza Khabar `;
    return (
      <>
      
        {/* Pass the entire articles array to the Banner */}
        <Banner articles={articles} />
        <Cloud category={this.props.category} />

        <div className="my-0 p-0">

          <div className="d-flex flex-wrap justify-content-center p-0">
            {articles.map((article, index) => (
              <News
                key={index}
                title={article.title ? article.title.slice(0, 60) : ''}
                description={article.description ? article.description.slice(0, 90) : ''}
                imageUrl={article.urlToImage || 'https://via.placeholder.com/300x200.png?text=No+Image'}
                newsUrl={article.url}
                publishedAt={article.publishedAt}
                author={article.author}
                source={article.source.name}

              />
            ))}
          </div>

          <div className="text-center mt-4 flex flex-center justify-center">
            <button
              className="btn btn-success"
              onClick={this.handleLoadMore}
              disabled={loading}
            >
              {loading ? 'Loading...' : 'Load More'}
            </button>
            <button
  className="btn btn-success mx-2"
  onClick={this.handleLoadless}
  disabled={loading || this.state.page === 1}
>
  {loading ? 'Loading...' : 'Show Less'}
</button>
            
          </div >
          <TopButton/>
          <br></br>
          <div  className="bg-secondary p-5  ">
          <p className="text-center text-light">Powered by NewsAPI.org</p>
          <p className="text-center text-light">Taza-Khabar &copy;{todayDate} </p>
          <p className="text-center text-light">All rights reserved</p>
          </div>
          
        </div>
      </> 
    );
  }
}
