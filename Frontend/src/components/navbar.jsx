import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    };
  }

  handleInputChange = (e) => {
    this.setState({ searchText: e.target.value });
  };

  handleSearchSubmit = (e) => {
    e.preventDefault();
    const query = this.state.searchText.trim();
    if (query) {
      this.props.navigate(`/search?q=${encodeURIComponent(query)}`);
      this.setState({ searchText: '' });
    }
  };

  navClass = ({ isActive }) => `nav-link px-3 py-2 nav-pill ${isActive ? 'active' : ''}`;

  render() {
    const categories = [
      { label: 'General', path: '/' },
      { label: 'Business', path: '/business' },
      { label: 'Entertainment', path: '/entertainment' },
      { label: 'Health', path: '/health' },
      { label: 'Science', path: '/science' },
      { label: 'Sports', path: '/sports' },
      { label: 'Technology', path: '/technology' },
    ];

    return (
      <header className="site-header">
        <nav className="navbar app-navbar navbar-expand-lg px-3 px-lg-4">
          <div className="container-fluid px-0 navbar-core">
            <Link className="navbar-brand brand-mark" to="/">
              TazaKhabar<span className="brand-dot">.live</span>
            </Link>

            <button
              className="navbar-toggler nav-toggle"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse nav-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-about-wrap">
                <li className="nav-item">
                  <NavLink end className={this.navClass} to="/about">
                    About
                  </NavLink>
                </li>
              </ul>

              <form className="d-flex nav-search" role="search" onSubmit={this.handleSearchSubmit}>
                <input
                  className="form-control me-2 nav-input"
                  type="search"
                  placeholder="Search topics or headlines"
                  aria-label="Search"
                  value={this.state.searchText}
                  onChange={this.handleInputChange}
                />
                <button className="btn nav-search-btn" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>

        <div className="news-main categories-row">
          <div className="container-fluid px-0">
            <div className="categories-wrap">
              {categories.map((category) => (
                <NavLink end={category.path === '/'} key={category.path} className={this.navClass} to={category.path}>
                  {category.label}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </header>
    );
  }
}
