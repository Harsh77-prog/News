import React, { Component } from 'react';
import NewsComponent from './components/NewsComponent';
import About from './components/about';
import './App.css';
import SearchResults from './components/SearchResults';
import NavbarWrapper from './components/NavbarWrapper';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoadingBar from "react-top-loading-bar";
export default class App extends Component {
  state ={
    progress:0
  }
  setProgress = (progress) => {
    this.setState({ progress : progress });
  }
  componentDidMount() {
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    this.setState({ navbarHeight });
  }
  
  render() {
     
    return (
      
      <Router>
        <NavbarWrapper />
            <div style={{ position: "relative", zIndex: 1 ,padding:'0px'}}>
          <LoadingBar
           className="my-loading-bar"
            height={2}       // base height (in px)
            color="#f11946"
            progress={this.state.progress}
            style={{
              position: 'relative', // Changed from fixed to relative
              top: `${this.state.navbarHeight}px`,
              zIndex: 1,
              
            }}
          />
        </div>

        <div style={{ backgroundColor: '#E7DDFF', padding:'0px'}}>

          <Routes>
            <Route path="/About"  element={<About setProgress = {this.setProgress}/>} />
            <Route path="/" element={<NewsComponent setProgress = {this.setProgress} key="general" category="general" />} />
            <Route path="/business" element={<NewsComponent setProgress = {this.setProgress} key="business" category="business" />} />
            <Route path="/entertainment" element={<NewsComponent setProgress = {this.setProgress} key="entertainment" category="entertainment" />} />
           
            <Route path="/health" element={<NewsComponent setProgress = {this.setProgress} key="health" category="health" />} />
            <Route path="/science" element={<NewsComponent setProgress = {this.setProgress} key="science" category="science" />} />
            <Route path="/sports" element={<NewsComponent setProgress = {this.setProgress} key="sports" category="sports" />} />
            <Route path="/technology" element={<NewsComponent setProgress = {this.setProgress} key="technology" category="technology" />} />
            <Route path="/search" element={<SearchResults />} />
          </Routes>
        </div>
      </Router>
    );
  }
}
