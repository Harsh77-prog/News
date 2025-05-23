import React, { Component } from 'react'
import '../App.css'
export default class banner extends Component {
  
  // Fallback to default image if the image fails to load
  
  
  render() {
    const { articles = [] } = this.props; // articles passed from parent component

    return (
     
        <div class="taza-banner bg-dark text-white py-2 overflow-hidden position-relative">
        <div className="scrolling-text position-absolute">
          {/* Loop through the first 5 articles to display their titles */}
          {articles.slice(0, 5).map((article, index) => (
            <span key={index} className="mx-4">📰 {article.title}</span>
          ))}
        </div>
        </div>
      
    )
  }
}
