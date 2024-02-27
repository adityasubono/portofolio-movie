import React, {useEffect, useState} from 'react';
import movieService from "../../services/movieService";
import {Pagination} from "react-bootstrap";
import "../../components/Modal/ModalComponent.css"
import ModalComponent from "../../components/Modal/ModalComponent";

function Home(props) {
    const [dataNowPlaying, setDataNowPlaying] = useState([]);
    const [state, setState] = useState({
        data: [],
        limit: 10,
        activePage: 1,
    });


    const fetchNowPlaying = async (page) => {
        try {
            const response = await movieService.getNowPlaying(page)
            const data = await response
            setDataNowPlaying(data.data.results);
            setState((prev) => ({
                ...prev,
                data: data.data.results,
            }));
        } catch (error) {
            console.error('Error fetching data now playing:', error);

        } finally {

        }
    };


    const handlePageChange = (pageNumber) => {
        setState((prev) => ({ ...prev, activePage: pageNumber }));
    };


    useEffect(() => {
        fetchNowPlaying(state.activePage)
    }, [state.activePage])

    return (
        <div>
            <h2 className="mt-5 pb-2 border-bottom">Popular Movie</h2>

            <div>
                <div className='d-flex justify-content-start' style={{
                    overflow: 'auto',
                    whiteSpace: 'nowrap',
                    height: '100%'

                }}>
                    {dataNowPlaying.map((data, index) => (
                        <div key={index + 1} className='mb-3'>
                            <div className="card card-cover h-100 overflow-hidden text-white border-black bg-dark rounded-5 shadow-lg me-3"
                                style={{
                                    width: '20rem',
                                    backgroundImage: `url(https://www.themoviedb.org/t/p/original/${data.backdrop_path})`,
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "cover"
                                }}
                            >

                                <div className="card-body"></div>


                                <div className="card bg-transparent border-0" style={{
                                    background: 'linear-gradient(to bottom, #00000000, #000000)',
                                }}>
                                    <div className="card-body text-white text-shadow-1">
                                        <h2 className="pt-5 mt-5  lh-1 fw-bold text-white">{data.original_title}</h2>
                                        <small className="card-text">{data.overview}</small>
                                    </div>

                                    <div className='d-flex justify-content-between'>
                                        <div className='mt-2'>
                                            <button className='btn btn-primary'
                                                    data-bs-toggle="modal"
                                                    data-bs-backdrop="static"
                                                    data-bs-target={`#exampleModal` + index + 1}>
                                                <i className="bi bi-play-fill "></i> Play
                                            </button>
                                        </div>
                                        <ul className="d-flex justify-content-between list-unstyled mt-auto text-white">
                                            <li className="d-flex align-items-center me-3">
                                                <i className="bi bi-calendar2-date me-2"></i>
                                                <small>{data.release_date}</small>
                                            </li>
                                            <li className="d-flex align-items-center">
                                                <i className="bi bi-clipboard-data me-2"></i>
                                                <small>
                                                    {Math.round(data.vote_average * 10) / 10}
                                                </small>
                                            </li>
                                        </ul>
                                        <div className='mt-2'>
                                            <button className='btn btn-success'>
                                                <i className="bi bi-list-check me-1"></i>
                                                Add list
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="modal fade modal-xl"
                                 data-modal-color=""
                                 id={`exampleModal` + index + 1}
                                 data-bs-backdrop="static"
                                 data-bs-keyboard="false" tabIndex="-1" role="dialog" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h4 className="modal-title">{data.original_title}</h4>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body text-black portfolio-details">
                                            <div className="row ">
                                                <div className="col-lg-8">
                                                    <div style={{cursor: 'pointer'}}>
                                                        <img alt={'image'}
                                                             className="img-thumbnail"
                                                             src={`https://www.themoviedb.org/t/p/original/${data.backdrop_path}`}/>
                                                        <i className='bx bx-play-circle text-white display-1 z-1'
                                                           style={{
                                                               position: "absolute",
                                                               top: '2em',
                                                               left: ' 4.5em',
                                                               zIndex: 1,
                                                           }}></i>
                                                    </div>
                                                </div>

                                                <div className="col-lg-4 d-inline">
                                                    <div className="portfolio-info">
                                                        <h3>Movie information</h3>
                                                        <ul>
                                                            <li><strong>Title</strong>: <a href="#">www.example.com</a>
                                                            </li>
                                                            <li><strong>Release Date</strong>: Web design</li>
                                                            <li><strong>Popularity</strong>: ASU Company</li>
                                                            <li><strong>Vote Avarage</strong>: 01 March, 2020</li>
                                                        </ul>
                                                    </div>

                                                    <div className="portfolio-description">
                                                        <h2>Overview</h2>
                                                        <div className='text-center w-25'>
                                                            {data.overview}
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>


                                            {/*<div className="ratio ratio-21x9">*/}
                                            {/*    <iframe src="https://www.youtube.com/embed/n_MhKLhy3xs"*/}
                                            {/*            frameBorder='0'*/}
                                            {/*            allow='autoplay; encrypted-media'*/}
                                            {/*            allowFullScreen*/}
                                            {/*            title="YouTube video">*/}
                                            {/*    </iframe>*/}
                                            {/*</div>*/}
                                            <p></p>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-warning" data-bs-dismiss="modal">Close
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


                {/*<div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">*/}
                {/*    {dataNowPlaying.map((data, index) => (*/}
                {/*        <div className="col" key={index + 1}>*/}
                {/*            <div*/}
                {/*                className="card card-cover h-100 overflow-hidden text-white border-black bg-dark rounded-5 shadow-lg"*/}
                {/*                style={{*/}
                {/*                    backgroundImage: `url(https://www.themoviedb.org/t/p/original/${data.backdrop_path})`,*/}
                {/*                    backgroundRepeat: "no-repeat",*/}
                {/*                    backgroundSize: "cover"*/}
                {/*                }}*/}
                {/*            >*/}

                {/*                <div className="card-body"></div>*/}


                {/*                <div className="card bg-transparent border-0" style={{*/}
                {/*                    background: 'linear-gradient(to bottom, #00000000, #000000)',*/}
                {/*                }}>*/}
                {/*                    <div className="card-body text-white text-shadow-1">*/}
                {/*                        <h2 className="pt-5 mt-5  lh-1 fw-bold text-white">{data.original_title}</h2>*/}
                {/*                        <small className="card-text">{data.overview}</small>*/}
                {/*                    </div>*/}

                {/*                    <div className='d-flex justify-content-between'>*/}
                {/*                        <div className='mt-2'>*/}
                {/*                            <button className='btn btn-primary'*/}
                {/*                                    data-bs-toggle="modal"*/}
                {/*                                    data-bs-backdrop="static"*/}
                {/*                                    data-bs-target={`#exampleModal` + index + 1}>*/}
                {/*                                <i className="bi bi-play-fill "></i> Play*/}
                {/*                            </button>*/}
                {/*                        </div>*/}
                {/*                        <ul className="d-flex justify-content-between list-unstyled mt-auto text-white">*/}
                {/*                            <li className="d-flex align-items-center me-3">*/}
                {/*                                <i className="bi bi-calendar2-date me-2"></i>*/}
                {/*                                <small>{data.release_date}</small>*/}
                {/*                            </li>*/}
                {/*                            <li className="d-flex align-items-center">*/}
                {/*                                <i className="bi bi-clipboard-data me-2"></i>*/}
                {/*                                <small>*/}
                {/*                                    {Math.round(data.vote_average * 10) / 10}*/}
                {/*                                </small>*/}
                {/*                            </li>*/}
                {/*                        </ul>*/}
                {/*                        <div className='mt-2'>*/}
                {/*                            <button className='btn btn-success'>*/}
                {/*                                <i className="bi bi-list-check me-1"></i>*/}
                {/*                                Add list*/}
                {/*                            </button>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}

                {/*            <div className="modal fade modal-xl"*/}
                {/*                 data-modal-color=""*/}
                {/*                 id={`exampleModal` + index + 1}*/}
                {/*                 data-bs-backdrop="static"*/}
                {/*                 data-bs-keyboard="false" tabIndex="-1" role="dialog" aria-hidden="true">*/}
                {/*                <div className="modal-dialog">*/}
                {/*                    <div className="modal-content">*/}
                {/*                        <div className="modal-header">*/}
                {/*                            <h4 className="modal-title">{data.original_title}</h4>*/}
                {/*                            <button type="button" className="btn-close" data-bs-dismiss="modal"*/}
                {/*                                    aria-label="Close"></button>*/}
                {/*                        </div>*/}
                {/*                        <div className="modal-body text-black portfolio-details">*/}
                {/*                            <div className="row ">*/}
                {/*                                <div className="col-lg-8">*/}
                {/*                                    <div style={{cursor: 'pointer'}}>*/}
                {/*                                        <img alt={'image'}*/}
                {/*                                             className="img-thumbnail"*/}
                {/*                                             src={`https://www.themoviedb.org/t/p/original/${data.backdrop_path}`}/>*/}
                {/*                                        <i className='bx bx-play-circle text-white display-1 z-1'*/}
                {/*                                           style={{*/}
                {/*                                               position: "absolute",*/}
                {/*                                               top: '2em',*/}
                {/*                                               left: ' 4.5em',*/}
                {/*                                               zIndex: 1,*/}
                {/*                                           }}></i>*/}
                {/*                                    </div>*/}
                {/*                                </div>*/}

                {/*                                <div className="col-lg-4">*/}
                {/*                                    <div className="portfolio-info">*/}
                {/*                                        <h3>Movie information</h3>*/}
                {/*                                        <ul>*/}
                {/*                                            <li><strong>Title</strong>: <a href="#">www.example.com</a>*/}
                {/*                                            </li>*/}
                {/*                                            <li><strong>Release Date</strong>: Web design</li>*/}
                {/*                                            <li><strong>Popularity</strong>: ASU Company</li>*/}
                {/*                                            <li><strong>Vote Avarage</strong>: 01 March, 2020</li>*/}
                {/*                                        </ul>*/}
                {/*                                    </div>*/}
                {/*                                    <div className="portfolio-description">*/}
                {/*                                        <h2>Overview</h2>*/}
                {/*                                        <p>*/}
                {/*                                            {data.overview}*/}
                {/*                                        </p>*/}
                {/*                                    </div>*/}
                {/*                                </div>*/}
                {/*                            </div>*/}


                {/*                            /!*<div className="ratio ratio-21x9">*!/*/}
                {/*                            /!*    <iframe src="https://www.youtube.com/embed/n_MhKLhy3xs"*!/*/}
                {/*                            /!*            frameBorder='0'*!/*/}
                {/*                            /!*            allow='autoplay; encrypted-media'*!/*/}
                {/*                            /!*            allowFullScreen*!/*/}
                {/*                            /!*            title="YouTube video">*!/*/}
                {/*                            /!*    </iframe>*!/*/}
                {/*                            /!*</div>*!/*/}
                {/*                            <p></p>*/}
                {/*                        </div>*/}
                {/*                        <div className="modal-footer">*/}
                {/*                            <button type="button" className="btn btn-link" data-bs-dismiss="modal">Close*/}
                {/*                            </button>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}

                {/*        </div>*/}
                {/*    ))}*/}
                {/*</div>*/}
            </div>


            {/*{JSON.stringify(state.activePage)}*/}

            {/*<Pagination totalRecords={state.total_results} onPageChanged={handlePageChange(1)} pageLimit={10} pageNeighbours={1}/>*/}


            <Pagination className="px-4">
                {state.data.map((_, index) => {
                    return (
                        <Pagination.Item
                            onClick={() => handlePageChange(index + 1)}
                            key={index + 1}
                            active={index + 1 === state.activePage}
                        >
                            {index + 1}
                        </Pagination.Item>
                    );
                })}
            </Pagination>

            <ModalComponent/>


            {/*<PaginationComponent orgName={'YtoTech'} perPage={5} />*/}
        </div>
    );
}

export default Home;
