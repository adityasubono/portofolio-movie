import React, {useEffect, useState} from 'react';
import movieService from "../../services/movieService";
import LoadingCard from "../../components/LoadingCard/LoadingCard";


function Dashboard(props) {
    const [loading, setLoading] = useState(false)
    const [dataNowPlaying, setDataNowPlaying] = useState([]);



    const fetchNowPlaying = async () => {
        try {
            const response = await movieService.getNowPlaying()
            const data = await response
            setDataNowPlaying(data.data.results);
            setLoading(true)
        } catch (error) {
            console.error('Error fetching data now playing:', error);

        } finally {
           setLoading(false)
        }
    };

    useEffect(() => {
        fetchNowPlaying();
    }, [])

    return (
        <div>
            <h1 className="h2">Movie List</h1>
            <hr className="hr"/>
            <h1 className="h4">Now Playing</h1>

            {loading ? <LoadingCard title={'Loading...'}/> : ''}

            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                {dataNowPlaying.map((data, index) => (
                        <div className="col" key={index}>
                            <div className="card shadow-sm rounded-2">
                                <img src={`https://www.themoviedb.org/t/p/w1280${data.backdrop_path}`}
                                     className="img-fluid"
                                     alt="gambar"/>
                                <div className="card-body">
                                    <div className='d-flex justify-content-between'>
                                        <p className="card-text fw-bold">{data.original_title} </p>
                                        <div>
                                            <i className="bi bi-clipboard-data me-2"></i>
                                             {Math.round(data.vote_average * 10) / 10}

                                        </div>
                                    </div>

                                    <p className="card-text">{data.overview} </p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-primary">
                                                <i className='bi bi-play'></i>Play
                                            </button>
                                            <button type="button" className="btn btn-sm btn-outline-success">
                                                <i className='bi bi-list'></i>
                                                Add Watchlist
                                            </button>
                                        </div>
                                        <small className="text-muted">{data.release_date}</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default Dashboard;
