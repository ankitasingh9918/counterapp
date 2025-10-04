import React from 'react';
import { Link } from 'react-router-dom';
function Header() {
    return (
        <header>
            <section>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                                <div className="container-fluid">
                                    
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
                                        <ul className="navbar-nav me-auto mb-2 gap-4 mb-lg-0 m-auto">
                                            <li className="nav-item">
                                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/about">About Us</Link>
                                            </li>
                                           
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/services">Services</Link>
                                            </li>
                                           
                                             <li className="nav-item">
                                                <Link className="nav-link" aria-current="page" to="/blog">Blog</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/contact">Contact Us</Link>
                                            </li>
                                          
                                        </ul>
                                        <form className="d-flex">
                                           
                                            <button className="btn btn-primary" type="submit">Get Started</button>
                                        </form>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
        </header>
    );
}

export default Header;
