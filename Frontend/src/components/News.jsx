import React, { Component } from 'react'

export default class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
          imageUrl: this.props.imageUrl,
        };
      }
    
      // Fallback to default image if the image fails to load
      handleImageError = () => {
        this.setState({
          imageUrl: 'https://www.woodpro.com/images/drawings/web/no_image.png', // Fallback image URL
        });
      };
  render() {
    let { title, description, newsUrl ,publishedAt,author} = this.props;
    let { imageUrl } = this.state;

    return (
      <div className="card m-2" style={{ width: '22rem', padding:'0px'}}>
        <img
          src={imageUrl}
          className="card-img-top"
          alt="news"
          onError={this.handleImageError}
          style={{objectFit: 'contain', height: '200px'}} // Trigger fallback if image fails to load
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text text-primary">Published at: {new Date(publishedAt).toLocaleString()}</p>
          <p className="card-text text-secondary">Author: {author ? author : 'Unknown'}</p>
          {/* Use target="_blank" to open in a new tab */}
          <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-secondary">
            Read More
          </a>
        </div>
      </div>
    );
  }
}
