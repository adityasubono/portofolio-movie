import React, {useEffect, useState} from 'react';
import movieService from "../../services/movieService";
import LoadingCard from "../../components/LoadingCard/LoadingCard";
import {Pagination} from "react-bootstrap";



function Home(props) {
    const [loading, setLoading] = useState(false)
    const [dataNowPlaying, setDataNowPlaying] = useState([]);
    const [state, setState] = useState({
        data: [],
        limit: 10,
        activePage: 1
    });


    const fetchNowPlaying = async (page = 10) => {
        try {
            const response = await movieService.getNowPlaying(page)
            const data = await response
            setDataNowPlaying(data.data.results);
            setState((prev) => ({
                ...prev,
                data: data.data.results
            }));
            setLoading(true)
        } catch (error) {
            console.error('Error fetching data now playing:', error);

        } finally {
           setLoading(false)
        }
    };


    const handlePageChange = (pageNumber) => {
        setState((prev) => ({ ...prev, activePage: pageNumber }));
    };



    useEffect(() => {
        fetchNowPlaying(state.activePage);
    }, [state.activePage])

    return (
        <div>
            <h2 className="mt-5 pb-2 border-bottom">Popular Movie</h2>

            <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
                {dataNowPlaying.map((data, index) => (
                    <div className="col">
                        <div className="card card-cover h-100 overflow-hidden text-white border-black bg-dark rounded-5 shadow-lg"
                            style={{
                                backgroundImage: `url(https://www.themoviedb.org/t/p/original/${data.backdrop_path})`,
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover"
                            }}
                        >

                            <div className="card-body">

                            </div>


                            <div className="card bg-transparent border-0" style={{
                                background: 'linear-gradient(to bottom, #00000000, #000000)',
                            }}>
                                <div className="card-body text-white text-shadow-1">
                                    <h2 className="pt-5 mt-5  lh-1 fw-bold text-white">{data.original_title}</h2>
                                    <small className="card-text" >{data.overview}</small>
                                </div>

                                <div className='d-flex justify-content-between'>
                                    <div className='mt-2'>
                                        <button className='btn btn-primary '>
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
                    </div>











                    // <div className="col" key={index}>
                    //     <div className="card shadow-sm rounded-2">
                    //         <img src={`https://www.themoviedb.org/t/p/w1280${data.backdrop_path}`}
                    //              className="img-fluid"
                    //              alt="gambar"/>
                    //         <div className="card-body">
                    //             <div className='d-flex justify-content-between'>
                    //                 <p className="card-text fw-bold">{data.original_title} </p>
                    //                 <div>
                    //                     <i className="bi bi-clipboard-data me-2"></i>
                    //                     {Math.round(data.vote_average * 10) / 10}
                    //                 </div>
                    //             </div>
                    //
                    //             <p className="card-text">{data.overview} </p>

                    //         </div>
                    //     </div>
                    // </div>
                ))}
            </div>

            {/*{JSON.stringify(state.activePage)}*/}

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

            {/*<PaginationComponent/>*/}
        </div>
    );
}

export default Home;
