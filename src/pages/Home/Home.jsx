import React, {useEffect, useState} from 'react';
import movieService from "../../services/movieService";
import {Pagination} from "react-bootstrap";
import "../../components/Modal/ModalComponent.css"
import ImageButton from '../../assets/img/button.jpg'
function Home(props) {
    const [dataNowPlaying, setDataNowPlaying] = useState([]);
    const [state, setState] = useState({
        data: [],
        limit: 10,
        activePage: 1,
    });

    const [play, setPlay] = useState(false)


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

    const handlePlayMovie = () => {
        setPlay(prevState => !prevState.play)
        alert(play)
    }


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
                <div className='d-flex flex-row' style={{
                    overflow: 'auto',
                    whiteSpace: 'none',
                    height: '100%'
                }}>
                    {dataNowPlaying.map((data, index) => (
                        <div key={index + 1} className='mb-3 me-4'>
                            <div className="card" style={{width: '20rem'}}>
                                <div className="card-header">
                                    Action
                                </div>
                                <img src={`https://www.themoviedb.org/t/p/original/${data.backdrop_path}`}
                                     data-bs-toggle="modal"
                                     data-bs-backdrop="static"
                                     data-bs-target={`#exampleModal` + index + 1}
                                     className="card-img-top rounded-0" alt="..." style={{
                                         cursor: 'pointer'
                                }}/>

                                <div className="card-body">
                                    <h6 className="card-title fw-light">{data.original_title}</h6>
                                    <div className="d-flex justify-content-between list-unstyled mt-auto mb-3">
                                        <div className="d-flex align-items-center me-3">
                                            <i className="bi bi-calendar2-date me-2"></i>
                                            <small>{data.release_date}</small>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <i className="bi bi-clipboard-data me-2"></i>
                                            <small>
                                                {Math.round(data.vote_average * 10) / 10}
                                            </small>
                                        </div>
                                    </div>
                                    <small className="card-text fw-light align-">
                                        {data.overview.substring(0, 100)}
                                        <a href="/detail-movie/"
                                           className="ms-2 text-decoration-none"
                                           data-bs-toggle="modal"
                                           data-bs-backdrop="static"
                                           data-bs-target={`#exampleModal` + index + 1}>Detail..</a>
                                    </small>
                                </div>

                                <div className="modal fade modal-xl"
                                     data-modal-color=""
                                     id={`exampleModal` + index + 1}
                                     data-bs-backdrop="static"
                                     data-bs-keyboard="false" tabIndex="-1" role="dialog" aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-body text-black portfolio-details">


                                                <section id="blog" className="blog">
                                                    <article className="entry">
                                                        {!play ? (
                                                            <div className='container-image' onClick={()=> setPlay(!play)}>
                                                                <img
                                                                    src={`https://www.themoviedb.org/t/p/original/${data.backdrop_path}`}
                                                                    alt=""
                                                                />
                                                                <i className='icon-btn bx bx-play-circle display-1'/>
                                                            </div>
                                                        ) : (

                                                            <div className="ratio ratio-21x9">
                                                                <iframe src="https://www.youtube.com/embed/n_MhKLhy3xs"
                                                                        frameBorder='0'
                                                                        allow='autoplay; encrypted-media'
                                                                        allowFullScreen
                                                                        title="YouTube video">
                                                                </iframe>
                                                            </div>
                                                        )}


                                                        <h2 className="entry-title mt-2">
                                                            <a className='text-decoration-none'
                                                               href="blog-single.html">
                                                                {data.original_title}
                                                            </a>
                                                        </h2>

                                                        <div className="entry-meta">
                                                        <ul>
                                                                <li className="d-flex align-items-center">
                                                                    <i className="bi bi-calendar2-date"></i>
                                                                    {data.release_date}
                                                                </li>
                                                                <li className="d-flex align-items-center">
                                                                    <i className="bi bi-people"></i>
                                                                    {data.popularity}
                                                                </li>
                                                                <li className="d-flex align-items-center">
                                                                    <i className="bi bi-book"></i>
                                                                    {data.vote_average}
                                                                </li>
                                                                <li className="d-flex align-items-center">
                                                                    <i className="bi bi-box2-heart"></i>
                                                                    {data.vote_count}
                                                                </li>
                                                            </ul>
                                                        </div>

                                                        <div className="entry-content">
                                                            <p className='text-muted'>
                                                                {data.overview}
                                                            </p>
                                                        </div>

                                                        <div className='d-flex justify-content-end gap-2'>
                                                            <button className='btn btn-success'>
                                                                <i className='bi bi-list me-2'></i>Add List
                                                            </button>

                                                            <button type="button"
                                                                    className="btn btn-danger"
                                                                    data-bs-dismiss="modal"
                                                                    onClick={() => setPlay(!play)}
                                                                    aria-label="Close">
                                                                <i className='bi bi-x-lg me-2'></i>Close
                                                            </button>
                                                        </div>
                                                    </article>
                                                </section>


                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            {/*{JSON.stringify(state.activePage)}*/}

            {/*<Pagination totalRecords={state.total_results} onPageChanged={handlePageChange(1)} pageLimit={10} pageNeighbours={1}/>*/}


            {/*<Pagination className="px-4">*/}
            {/*    {state.data.map((_, index) => {*/}
            {/*        return (*/}
            {/*            <Pagination.Item*/}
            {/*                onClick={() => handlePageChange(index + 1)}*/}
            {/*                key={index + 1}*/}
            {/*                active={index + 1 === state.activePage}*/}
            {/*            >*/}
            {/*                {index + 1}*/}
            {/*            </Pagination.Item>*/}
            {/*        );*/}
            {/*    })}*/}
            {/*</Pagination>*/}

            {/*<ModalComponent/>*/}


            {/*<PaginationComponent orgName={'YtoTech'} perPage={5} />*/}
        </div>
    );
}

export default Home;
