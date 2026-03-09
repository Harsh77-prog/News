import React, { Component } from 'react';
import NewsComponent from './components/NewsComponent';
import About from './components/about';
import './App.css';
import SearchResults from './components/SearchResults';
import NavbarWrapper from './components/NavbarWrapper';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  state = {
    progress: 0,
    headerHeight: 0,
  };

  headerResizeObserver = null;

  setProgress = (progress) => {
    this.setState({ progress });
  };

  updateHeaderHeight = () => {
    const headerHeight = document.querySelector('.site-header')?.offsetHeight || 0;
    this.setState((prevState) => {
      if (prevState.headerHeight === headerHeight) {
        return null;
      }

      document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);
      return { headerHeight };
    });
  };

  componentDidMount() {
    this.updateHeaderHeight();
    window.addEventListener('resize', this.updateHeaderHeight);

    const header = document.querySelector('.site-header');
    if (header && typeof ResizeObserver !== 'undefined') {
      this.headerResizeObserver = new ResizeObserver(() => this.updateHeaderHeight());
      this.headerResizeObserver.observe(header);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateHeaderHeight);
    if (this.headerResizeObserver) {
      this.headerResizeObserver.disconnect();
    }
  }

  render() {
    return (
      <Router>
        <NavbarWrapper />

        <LoadingBar
          className="my-loading-bar"
          height={4}
          color="#8be9ff"
          progress={this.state.progress}
          style={{
            position: 'fixed',
            top: `${this.state.headerHeight + 10}px`,
            left: '12px',
            width: 'calc(100% - 24px)',
            zIndex: 1600,
            borderRadius: '999px',
          }}
        />

        <div className="app-shell">
          <Routes>
            <Route path="/About" element={<About />} />
            <Route path="/about" element={<About />} />
            <Route path="/" element={<NewsComponent setProgress={this.setProgress} key="general" category="general" />} />
            <Route path="/business" element={<NewsComponent setProgress={this.setProgress} key="business" category="business" />} />
            <Route path="/entertainment" element={<NewsComponent setProgress={this.setProgress} key="entertainment" category="entertainment" />} />
            <Route path="/health" element={<NewsComponent setProgress={this.setProgress} key="health" category="health" />} />
            <Route path="/science" element={<NewsComponent setProgress={this.setProgress} key="science" category="science" />} />
            <Route path="/sports" element={<NewsComponent setProgress={this.setProgress} key="sports" category="sports" />} />
            <Route path="/technology" element={<NewsComponent setProgress={this.setProgress} key="technology" category="technology" />} />
            <Route path="/search" element={<SearchResults />} />
          </Routes>
        </div>
      </Router>
    );
  }
}
