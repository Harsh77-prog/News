import React, { Component } from 'react';

const FALLBACK_IMAGE = 'https://www.woodpro.com/images/drawings/web/no_image.png';

export default class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageLoaded: false,
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.imageUrl !== this.props.imageUrl) {
      this.setState({ imageLoaded: false });
    }
  }

  handleImageError = (event) => {
    event.currentTarget.src = FALLBACK_IMAGE;
    event.currentTarget.onerror = null;
  };

  handleImageLoad = () => {
    if (!this.state.imageLoaded) {
      this.setState({ imageLoaded: true });
    }
  };

  render() {
    const { title, description, newsUrl, publishedAt, author, source, imageUrl, isAboveFold } = this.props;
    const { imageLoaded } = this.state;

    return (
      <article className="news-card h-100">
        <div className={`news-image-wrap ${imageLoaded ? 'is-loaded' : 'is-loading'}`}>
          <img
            src={imageUrl}
            className="news-image"
            alt="news"
            loading={isAboveFold ? 'eager' : 'lazy'}
            decoding="async"
            fetchpriority={isAboveFold ? 'high' : 'low'}
            width="600"
            height="400"
            onError={this.handleImageError}
            onLoad={this.handleImageLoad}
          />
        </div>
        <div className="news-body">
          <div className="news-meta">
            <span>{source || 'Unknown Source'}</span>
            <span>{new Date(publishedAt).toLocaleDateString('en-US')}</span>
          </div>
          <h3 className="news-title">{title}</h3>
          <p className="news-desc">{description}</p>
          <p className="news-meta">By {author ? author : 'Unknown Reporter'}</p>
          <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm news-btn">
            Read Full Story
          </a>
        </div>
      </article>
    );
  }
}
