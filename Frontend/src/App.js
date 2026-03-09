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
  };

  setProgress = (progress) => {
    this.setState({ progress });
  };

  render() {
    return (
      <Router>
        <NavbarWrapper />

        <LoadingBar
          height={4}
          color="#8be9ff"
          progress={this.state.progress}
          shadow={false}
          containerStyle={{
            position: 'fixed',
            top: '0',
            left: '0',
            right: '0',
            zIndex: 1700,
            overflow: 'hidden',
            background: 'rgba(139, 233, 255, 0.2)',
          }}
          progressStyle={{
            borderRadius: '999px',
            boxShadow: '0 0 12px rgba(139, 233, 255, 0.72)',
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
