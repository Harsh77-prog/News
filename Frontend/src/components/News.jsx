import React, { Component } from 'react';

export default class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: this.props.imageUrl,
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.imageUrl !== this.props.imageUrl) {
      this.setState({ imageUrl: this.props.imageUrl });
    }
  }

  handleImageError = () => {
    this.setState({
      imageUrl: 'https://www.woodpro.com/images/drawings/web/no_image.png',
    });
  };

  render() {
    const { title, description, newsUrl, publishedAt, author, source } = this.props;
    const { imageUrl } = this.state;

    return (
      <article className="news-card h-100">
        <div className="news-image-wrap">
          <img src={imageUrl} className="news-image" alt="news" onError={this.handleImageError} />
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