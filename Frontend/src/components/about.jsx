import React from 'react';

const About = () => {
  const pillars = [
    {
      title: 'Real-Time Monitoring',
      detail: 'Low-latency ingestion and category routing keep critical stories visible as soon as they break.',
    },
    {
      title: 'Editorial Signal',
      detail: 'Story ranking balances timeliness and relevance so readers can process updates quickly.',
    },
    {
      title: 'Precision Search',
      detail: 'Fast topic lookup and headline discovery help users move from scan to insight in seconds.',
    },
    {
      title: 'Responsive Experience',
      detail: 'Consistent interaction patterns across desktop and mobile with readable spacing and hierarchy.',
    },
  ];

  const stats = [
    { value: '24/7', label: 'Live Coverage' },
    { value: '7', label: 'Core Categories' },
    { value: '<2s', label: 'Typical Fetch Cycle' },
    { value: '100%', label: 'Mobile-Ready Layout' },
  ];

  const milestones = [
    { phase: 'Capture', text: 'News streams are continuously polled and grouped by category.' },
    { phase: 'Refine', text: 'Headlines are normalized for clean, readable presentation.' },
    { phase: 'Prioritize', text: 'High-signal items are surfaced first for quicker scanning.' },
    { phase: 'Deliver', text: 'Responsive cards and ticker modules keep flow smooth on every device.' },
  ];

  const stack = ['React', 'React Router', 'Bootstrap Utilities', 'Token-based Theming', 'Component Architecture'];

  return (
    <main className="about-page routes-shell">
      <section className="about-hero about-animate-slide">
        <div className="about-orb about-orb-one"></div>
        <div className="about-orb about-orb-two"></div>

        <p className="about-kicker">NEXT-GEN NEWSROOM UI</p>
        <h1>About Taza Khabar</h1>
        <p>
          Taza Khabar is built as a futuristic, high-clarity news interface where motion, hierarchy, and contrast are
          tuned for rapid reading. The goal is simple: make breaking information easier to discover and easier to trust.
        </p>

        <div className="about-stats-grid">
          {stats.map((stat) => (
            <article key={stat.label} className="about-stat about-animate-fade">
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-grid">
        {pillars.map((pillar, index) => (
          <article key={pillar.title} className="about-card about-feature-card" style={{ animationDelay: `${index * 0.1}s` }}>
            <h4>{pillar.title}</h4>
            <p>{pillar.detail}</p>
          </article>
        ))}
      </section>

      <section className="about-timeline-wrap about-animate-slide">
        <h2>How The Experience Flows</h2>
        <div className="about-timeline">
          {milestones.map((item, index) => (
            <article key={item.phase} className="about-step" style={{ animationDelay: `${index * 0.12}s` }}>
              <span>{item.phase}</span>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-card about-tech-card about-animate-fade">
        <h4>Technology Stack</h4>
        <p>Production-focused frontend foundation with modular components and scalable design tokens.</p>
        <div className="about-stack mt-3">
          {stack.map((item) => (
            <span key={item} className="chip">
              {item}
            </span>
          ))}
        </div>
      </section>
    </main>
  );
};

export default About;
