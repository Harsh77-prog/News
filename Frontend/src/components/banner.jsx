import React, { Component } from 'react';

export default class Banner extends Component {
  render() {
    const { articles = [] } = this.props;
    const items = articles.length
      ? articles.slice(0, 7).map((article, index) => ({
          id: `${index}-${article.title}`,
          text: article.title,
        }))
      : [
          { id: 'fallback-1', text: 'Live updates are loading.' },
          { id: 'fallback-2', text: 'Curated headlines from trusted sources.' },
          { id: 'fallback-3', text: 'Use category filters to personalize your feed.' },
        ];

    return (
      <div className="ticker">
        <div className="ticker-track">
          {items.concat(items).map((item) => (
            <span key={item.id} className="ticker-item">
              {item.text}
            </span>
          ))}
        </div>
      </div>
    );
  }
}