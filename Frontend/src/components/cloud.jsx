import React from 'react';

const Cloud = ({ category = 'news' }) => {
  return (
    <section className="section-banner">
      <h2>Top {category.toUpperCase()} Headlines</h2>
      <p>High-signal stories, clean layout, and smooth reading across all devices.</p>
    </section>
  );
};

export default Cloud;