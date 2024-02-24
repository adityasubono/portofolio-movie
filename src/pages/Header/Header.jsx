import React from 'react';
function Header({titleHeader}) {
    return (
        <header id="header" className="fixed-top d-flex align-items-center">
            <div className="container d-flex align-items-center">
                <h1 className="logo me-auto"><a href='/index.html' className='text-decoration-none'>{titleHeader}</a>
                </h1>
                <nav id="navbar" className="navbar">
                    <ul>
                        <li><a href="index.html" className="active text-decoration-none">Home</a></li>
                        <li className="dropdown"><a href="#" className='text-decoration-none'><span>About</span> <i
                            className="bi bi-chevron-down"></i></a>
                            <ul>
                                <li><a href="about.html" className='text-decoration-none'>About</a></li>
                                <li><a href="team.html" className='text-decoration-none'>Team</a></li>
                                <li><a href="testimonials.html" className='text-decoration-none'>Testimonials</a></li>

                                <li className="dropdown"><a href="#" className='text-decoration-none'>
                                    <span>Deep Drop Down</span>
                                    <i className="bi bi-chevron-right"></i></a>
                                    <ul>
                                        <li><a href="#" className='text-decoration-none'>Deep Drop Down 1</a></li>
                                        <li><a href="#" className='text-decoration-none'>Deep Drop Down 2</a></li>
                                        <li><a href="#" className='text-decoration-none'>Deep Drop Down 3</a></li>
                                        <li><a href="#" className='text-decoration-none'>Deep Drop Down 4</a></li>
                                        <li><a href="#" className='text-decoration-none'>Deep Drop Down 5</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li><a href="services.html" className='text-decoration-none'>Services</a></li>
                        <li><a href="portfolio.html" className='text-decoration-none'>Portfolio</a></li>
                        <li><a href="pricing.html" className='text-decoration-none'>Pricing</a></li>
                        <li><a href="blog.html" className='text-decoration-none'>Blog</a></li>

                        <li><a href="contact.html" className='text-decoration-none'>Contact</a></li>
                        <li><a href="index.html" className="getstarted text-decoration-none">Get Started</a></li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>
            </div>
        </header>

    );
}

export default Header;
