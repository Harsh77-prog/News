import React, { Component } from 'react';
import NewsComponent from './components/NewsComponent';
import About from './components/about';
import './App.css';
import SearchResults from './components/SearchResults';
import NavbarWrapper from './components/NavbarWrapper';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoadingBar from "react-top-loading-bar";
export default class App extends Component {
  state = {
    progress: 0,
    navbarHeight: 0,
  };

  setProgress = (progress) => {
    this.setState({ progress: progress });
  };

  componentDidMount() {
    const navbarHeight = document.querySelector('.app-navbar')?.offsetHeight || 0;
    this.setState({ navbarHeight: navbarHeight + 2 });
  }

  render() {
    return (
      <Router>
        <NavbarWrapper />
        <div className="loading-holder">
          <LoadingBar
            className="my-loading-bar"
            height={3}
            color="#17c8ff"
            progress={this.state.progress}
            style={{
              position: 'relative',
              top: `${this.state.navbarHeight}px`,
              zIndex: 1400,
            }}
          />
        </div>

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
