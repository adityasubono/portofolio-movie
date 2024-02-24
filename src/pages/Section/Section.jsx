import React from 'react';
import ImageSlide1 from '../../assets/img/slide/slide-1.jpg'
import ImageSlide2 from '../../assets/img/slide/slide-2.jpg'
import ImageSlide3 from '../../assets/img/slide/slide-3.jpg'

function Section(props) {
    return (
        <section id="hero">
            <div id="carouselExampleControlsNoTouching"
                 className="carousel slide"
                 data-bs-ride="carousel"
                 data-bs-touch="false"
                 data-bs-interval="5000">
                <div className="carousel-inner">
                    <div className="carousel-item active"
                         style={{backgroundImage: `url(${ImageSlide1})`}}>
                        <div className="carousel-container">
                            <div className="container">
                                <h2 className="animate__animated animate__fadeInDown">Welcome to <span>Sailor</span>
                                </h2>
                                <p className="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid
                                    qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias
                                    dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus
                                    deleniti vel. Minus et tempore modi architecto.</p>
                                <a href="#about"
                                   className="btn-get-started animate__animated animate__fadeInUp scrollto text-decoration-none">
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item"
                         style={{backgroundImage: `url(${ImageSlide2})`}}>
                        <div className="carousel-container">
                            <div className="container">
                                <h2 className="animate__animated animate__fadeInDown">Sequi ea ut et est quaerat</h2>
                                <p className="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid
                                    qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias
                                    dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus
                                    deleniti vel. Minus et tempore modi architecto.</p>
                                <a href="#about"
                                   className="btn-get-started animate__animated animate__fadeInUp scrollto text-decoration-none">Read
                                    More</a>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item"
                         style={{backgroundImage: `url(${ImageSlide3})`}}>
                        <div className="carousel-container">
                            <div className="container">
                                <h2 className="animate__animated animate__fadeInDown">Lorem Ipsum Dolor</h2>
                                <p className="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid
                                    qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias
                                    dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus
                                    deleniti vel. Minus et tempore modi architecto.</p>
                                <a href="#about"
                                   className="btn-get-started animate__animated animate__fadeInUp scrollto text-decoration-none">Read
                                    More</a>
                            </div>
                        </div>
                    </div>
                </div>

                <button className="carousel-control-prev" type="button"
                        data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button"
                        data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                    <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </section>
    );
}

export default Section;
