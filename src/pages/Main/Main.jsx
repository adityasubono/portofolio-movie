import React from 'react';
import ClientImage1 from '../../assets/img/clients/client-1.png'
import ClientImage2 from '../../assets/img/clients/client-2.png'
import ClientImage3 from '../../assets/img/clients/client-3.png'
import ClientImage4 from '../../assets/img/clients/client-4.png'
import ClientImage5 from '../../assets/img/clients/client-5.png'
import ClientImage6 from '../../assets/img/clients/client-6.png'
import PortoImage1 from  '../../assets/img/portfolio/portfolio-1.jpg'
import PortoImage2 from  '../../assets/img/portfolio/portfolio-2.jpg'
import PortoImage3 from  '../../assets/img/portfolio/portfolio-3.jpg'
import PortoImage4 from  '../../assets/img/portfolio/portfolio-4.jpg'
import PortoImage5 from  '../../assets/img/portfolio/portfolio-5.jpg'
import PortoImage6 from  '../../assets/img/portfolio/portfolio-6.jpg'
import PortoImage7 from  '../../assets/img/portfolio/portfolio-7.jpg'
import PortoImage8 from  '../../assets/img/portfolio/portfolio-8.jpg'
import PortoImage9 from  '../../assets/img/portfolio/portfolio-9.jpg'


function Main(props) {
    return (
        <main id="main">
            <section id="about" className="about">
                <div className="container">

                    <div className="row content">
                        <div className="col-lg-6">
                            <h2>Eum ipsam laborum deleniti velitena</h2>
                            <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assum perenda sruen jonee
                                trave</h3>
                        </div>
                        <div className="col-lg-6 pt-4 pt-lg-0">
                            <p>
                                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum
                            </p>
                            <ul>
                                <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea
                                    commodo consequa
                                </li>
                                <li><i className="ri-check-double-line"></i> Duis aute irure dolor in reprehenderit in
                                    voluptate velit
                                </li>
                                <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat. Duis aute irure dolor in reprehenderit in
                                </li>
                            </ul>
                            <p className="fst-italic">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore
                                magna aliqua.
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            <section id="clients" className="clients section-bg">
                <div className="container">

                    <div className="row">

                        <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                            <img src={`${ClientImage1}`} className="img-fluid" alt=""/>
                        </div>

                        <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                            <img src={`${ClientImage2}`} className="img-fluid" alt=""/>
                        </div>

                        <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                            <img src={`${ClientImage3}`} className="img-fluid" alt=""/>
                        </div>

                        <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                            <img src={`${ClientImage4}`} className="img-fluid" alt=""/>
                        </div>

                        <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                            <img src={`${ClientImage5}`} className="img-fluid" alt=""/>
                        </div>

                        <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                            <img src={`${ClientImage6}`} className="img-fluid" alt=""/>
                        </div>

                    </div>

                </div>
            </section>

            <section id="services" class="services">
                <div class="container">

                    <div class="row">
                        <div class="col-md-6">
                            <div class="icon-box">
                                <i class="bi bi-briefcase"></i>
                                <h4><a href="#">Lorem Ipsum</a></h4>
                                <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                                    occaecati cupiditate non provident</p>
                            </div>
                        </div>
                        <div class="col-md-6 mt-4 mt-md-0">
                            <div class="icon-box">
                                <i class="bi bi-card-checklist"></i>
                                <h4><a href="#">Dolor Sitema</a></h4>
                                <p>Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat tarad limino ata</p>
                            </div>
                        </div>
                        <div class="col-md-6 mt-4 mt-md-0">
                            <div class="icon-box">
                                <i class="bi bi-bar-chart"></i>
                                <h4><a href="#">Sed ut perspiciatis</a></h4>
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                    fugiat nulla pariatur</p>
                            </div>
                        </div>
                        <div class="col-md-6 mt-4 mt-md-0">
                            <div class="icon-box">
                                <i class="bi bi-binoculars"></i>
                                <h4><a href="#">Nemo Enim</a></h4>
                                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                    mollit anim id est laborum</p>
                            </div>
                        </div>
                        <div class="col-md-6 mt-4 mt-md-0">
                            <div class="icon-box">
                                <i class="bi bi-brightness-high"></i>
                                <h4><a href="#">Magni Dolore</a></h4>
                                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                                    voluptatum deleniti atque</p>
                            </div>
                        </div>
                        <div class="col-md-6 mt-4 mt-md-0">
                            <div class="icon-box">
                                <i class="bi bi-calendar4-week"></i>
                                <h4><a href="#">Eiusmod Tempor</a></h4>
                                <p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum
                                    soluta nobis est eligendi</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>




            <section id="portfolio" className="portfolio">
                <div className="container">

                    <div className="row">
                        <div className="col-lg-12 d-flex justify-content-center">
                            <ul id="portfolio-flters">
                                <li data-filter="*" className="filter-active">All</li>
                                <li data-filter=".filter-app">App</li>
                                <li data-filter=".filter-card">Card</li>
                                <li data-filter=".filter-web">Web</li>
                            </ul>
                        </div>
                    </div>


                    <div className="row portfolio-container">
                        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                            <div className="portfolio-wrap">
                                <img src={`${PortoImage1}`} className="img-fluid" alt=""/>
                                <div className="portfolio-info">
                                    <h4>App 1</h4>
                                    <p>App</p>
                                    <div className="portfolio-links">
                                        <a href={`${PortoImage1}`}
                                           data-gallery="portfolioGallery"
                                           className="portfolio-lightbox"
                                           title="App 1">
                                            <i className="bi bi-plus"></i></a>
                                        <a href={`${PortoImage1}`}
                                           className="portfolio-details-lightbox"
                                           data-glightbox="type: external"
                                           title="Portfolio Details">
                                            <i className="bi bi-link"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                            <div className="portfolio-wrap">
                                <img src={`${PortoImage2}`} class="img-fluid" alt=""/>
                                <div className="portfolio-info">
                                    <h4>Web 3</h4>
                                    <p>Web</p>
                                    <div className="portfolio-links">
                                        <a href={`${PortoImage1}`}
                                           data-gallery="portfolioGallery"
                                           className="portfolio-lightbox"
                                           title="App 1">
                                            <i className="bi bi-plus"></i></a>
                                        <a href={`${PortoImage1}`}
                                           className="portfolio-details-lightbox"
                                           data-glightbox="type: external"
                                           title="Portfolio Details">
                                            <i className="bi bi-link"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                            <div className="portfolio-wrap">
                                <img src={`${PortoImage3}`} class="img-fluid" alt=""/>
                                <div className="portfolio-info">
                                    <h4>App 2</h4>
                                    <p>App</p>
                                    <div className="portfolio-links">
                                        <a href={`${PortoImage1}`}
                                           data-gallery="portfolioGallery"
                                           className="portfolio-lightbox"
                                           title="App 1">
                                            <i className="bi bi-plus"></i></a>
                                        <a href={`${PortoImage1}`}
                                           className="portfolio-details-lightbox"
                                           data-glightbox="type: external"
                                           title="Portfolio Details">
                                            <i className="bi bi-link"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                            <div className="portfolio-wrap">
                                <img src={`${PortoImage4}`} class="img-fluid" alt=""/>
                                <div className="portfolio-info">
                                    <h4>Card 2</h4>
                                    <p>Card</p>
                                    <div className="portfolio-links">
                                        <a href={`${PortoImage1}`}
                                           data-gallery="portfolioGallery"
                                           className="portfolio-lightbox"
                                           title="App 1">
                                            <i className="bi bi-plus"></i></a>
                                        <a href={`${PortoImage1}`}
                                           className="portfolio-details-lightbox"
                                           data-glightbox="type: external"
                                           title="Portfolio Details">
                                            <i className="bi bi-link"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                            <div className="portfolio-wrap">
                                <img src={`${PortoImage5}`} class="img-fluid" alt=""/>
                                <div className="portfolio-info">
                                    <h4>Web 2</h4>
                                    <p>Web</p>
                                    <div className="portfolio-links">
                                        <a href={`${PortoImage1}`}
                                           data-gallery="portfolioGallery"
                                           className="portfolio-lightbox"
                                           title="App 1">
                                            <i className="bi bi-plus"></i></a>
                                        <a href={`${PortoImage1}`}
                                           className="portfolio-details-lightbox"
                                           data-glightbox="type: external"
                                           title="Portfolio Details">
                                            <i className="bi bi-link"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                            <div className="portfolio-wrap">
                                <img src={`${PortoImage6}`} class="img-fluid" alt=""/>
                                <div className="portfolio-info">
                                    <h4>App 3</h4>
                                    <p>App</p>
                                    <div className="portfolio-links">
                                        <a href={`${PortoImage1}`}
                                           data-gallery="portfolioGallery"
                                           className="portfolio-lightbox"
                                           title="App 1">
                                            <i className="bi bi-plus"></i></a>
                                        <a href={`${PortoImage1}`}
                                           className="portfolio-details-lightbox"
                                           data-glightbox="type: external"
                                           title="Portfolio Details">
                                            <i className="bi bi-link"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                            <div className="portfolio-wrap">
                                <img src={`${PortoImage7}`} class="img-fluid" alt=""/>
                                <div className="portfolio-info">
                                    <h4>Card 1</h4>
                                    <p>Card</p>
                                    <div className="portfolio-links">
                                        <a href={`${PortoImage1}`}
                                           data-gallery="portfolioGallery"
                                           className="portfolio-lightbox"
                                           title="App 1">
                                            <i className="bi bi-plus"></i></a>
                                        <a href={`${PortoImage1}`}
                                           className="portfolio-details-lightbox"
                                           data-glightbox="type: external"
                                           title="Portfolio Details">
                                            <i className="bi bi-link"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                            <div className="portfolio-wrap">
                                <img src={`${PortoImage8}`} className="img-fluid" alt=""/>
                                <div className="portfolio-info">
                                    <h4>Card 3</h4>
                                    <p>Card</p>
                                    <div className="portfolio-links">
                                        <a href={`${PortoImage1}`}
                                           data-gallery="portfolioGallery"
                                           className="portfolio-lightbox"
                                           title="App 1">
                                            <i className="bi bi-plus"></i></a>
                                        <a href={`${PortoImage1}`}
                                           className="portfolio-details-lightbox"
                                           data-glightbox="type: external"
                                           title="Portfolio Details">
                                            <i className="bi bi-link"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                            <div className="portfolio-wrap">
                                <img src={`${PortoImage9}`} class="img-fluid" alt=""/>
                                <div className="portfolio-info">
                                    <h4>Web 3</h4>
                                    <p>Web</p>
                                    <div className="portfolio-links">
                                        <a href={`${PortoImage9}`}
                                           data-gallery="portfolioGallery"
                                           className="portfolio-lightbox"
                                           title="App 1">
                                            <i className="bi bi-plus"></i></a>
                                        <a href={`${PortoImage9}`}
                                           className="portfolio-details-lightbox"
                                           data-glightbox="type: external"
                                           title="Portfolio Details">
                                            <i className="bi bi-link"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </main>
    );
}

export default Main;
