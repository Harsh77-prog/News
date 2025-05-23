import React, { Component } from 'react';
import { Link } from 'react-router-dom';


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
      this.setState({ searchText: '' }); // Clear input
    }
  };
   titlehandle=()=>{
    document.title="Taza Khabar - ABOUT"
   }
  render() {
    return (
      <>
      <div className='p-0'>
        <nav className="navbar bg-secondary navbar-expand-lg navbar-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="">Taza-Khabar</Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/About" onClick={this.titlehandle}>About</Link>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Categories
                  </a>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/business">business</Link></li>
                    <li><Link className="dropdown-item" to="/entertainment">entertainment</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><Link className="dropdown-item" to="/">general</Link></li>
                    <li><Link className="dropdown-item" to="/health">health</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><Link className="dropdown-item" to="/science">science</Link></li>
                    <li><Link className="dropdown-item" to="/sports">sports</Link></li>
                    <li><Link className="dropdown-item" to="/technology">technology</Link></li>
                  </ul>
                </li>
             
 
  </ul>

            
                
              {/* 🟢 SEARCH BAR */}
              <form className="d-flex mt-2 mt-lg-0" role="search" onSubmit={this.handleSearchSubmit}>
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={this.state.searchText}
                  onChange={this.handleInputChange}
                />
                <button className="btn btn-outline-light" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
      </div>
              
            </>
    );
  }
}
