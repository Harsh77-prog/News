import React from 'react';

const About = () => {
  const pillars = [
    {
      title: 'Real-Time Monitoring',
      detail: 'Low-latency ingestion and category routing keep key stories visible the moment they break.',
    },
    {
      title: 'Editorial Signal',
      detail: 'Story ordering prioritizes relevance and readability so users can scan quickly with confidence.',
    },
    {
      title: 'Responsive by Default',
      detail: 'Every module is tuned for desktop and mobile with consistent interaction behavior.',
    },
    {
      title: 'Future-Ready Stack',
      detail: 'Componentized React architecture with reusable tokens supports fast expansion and redesign.',
    },
  ];

  return (
    <main className="about-page routes-shell">
      <section className="about-hero">
        <h1>About Taza Khabar</h1>
        <p>
          Taza Khabar is designed as a modern newsroom interface: clean hierarchy, reliable sourcing, and focused
          reading flows that help users move from headline to insight without friction.
        </p>
      </section>

      <section className="about-grid">
        {pillars.map((pillar) => (
          <article key={pillar.title} className="about-card">
            <h4>{pillar.title}</h4>
            <p>{pillar.detail}</p>
          </article>
        ))}
      </section>

      <section className="about-card">
        <h4>Technology</h4>
        <p>Production-focused UI foundation with scalable components and maintainable styling.</p>
        <div className="about-stack mt-3">
          <span className="chip">React</span>
          <span className="chip">React Router</span>
          <span className="chip">Bootstrap Utilities</span>
          <span className="chip">Progressive Layout System</span>
          <span className="chip">Token-based Theming</span>
        </div>
      </section>
    </main>
  );
};

export default About;