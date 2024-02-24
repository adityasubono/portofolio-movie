import React from 'react';
import {ThumbnailImage} from "../../assets/icon/Icon";
import TitlePage from "../../components/TitlePage/TitlePage";

function MyListMovie({title}) {
    return (
        <div>
            <TitlePage titlePage={'My List Movie'}/>
            <h1 className="h3">Genre</h1>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                <div className="col">
                    <div className="card shadow-sm">
                        <ThumbnailImage/>
                        <div className="card-body">
                            <p className="card-text">This is a wider card with supporting text below as a natural
                                lead-in to
                                additional content. This content is a little bit longer.</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="btn-group">
                                    <button type="button" className="btn btn-sm btn-outline-secondary">Play</button>
                                    <button type="button" className="btn btn-sm btn-outline-secondary">Add Watchlist
                                    </button>
                                </div>
                                <small className="text-muted">9 mins</small>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card shadow-sm">
                        <ThumbnailImage/>
                        <div className="card-body">
                            <p className="card-text">This is a wider card with supporting text below as a natural
                                lead-in to
                                additional content. This content is a little bit longer.</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="btn-group">
                                    <button type="button" className="btn btn-sm btn-outline-secondary">Play</button>
                                    <button type="button" className="btn btn-sm btn-outline-secondary">Add Watchlist
                                    </button>
                                </div>
                                <small className="text-muted">9 mins</small>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card shadow-sm">
                        <ThumbnailImage/>
                        <div className="card-body">
                            <p className="card-text">This is a wider card with supporting text below as a natural
                                lead-in to
                                additional content. This content is a little bit longer.</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="btn-group">
                                    <button type="button" className="btn btn-sm btn-outline-secondary">Play</button>
                                    <button type="button" className="btn btn-sm btn-outline-secondary">Add Watchlist
                                    </button>
                                </div>
                                <small className="text-muted">9 mins</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <hr className="hr"/>
            <h1 className="h3">Genre</h1>
            <hr className="hr"/>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                <div className="col">
                    <div className="card shadow-sm">
                        <ThumbnailImage/>
                        <div className="card-body">
                            <p className="card-text">This is a wider card with supporting text below as a natural
                                lead-in to
                                additional content. This content is a little bit longer.</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="btn-group">
                                    <button type="button" className="btn btn-sm btn-outline-secondary">Play</button>
                                    <button type="button" className="btn btn-sm btn-outline-secondary">Add Watchlist
                                    </button>
                                </div>
                                <small className="text-muted">9 mins</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyListMovie;
