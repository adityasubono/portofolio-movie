import React from 'react';
import {ThumbnailImage} from "../../assets/icon/Icon";


const datas = [1,2,3,4,5,6,7]
function LoadingCard({title}) {
    return (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {datas.map((data, index) => (
                <div className="col">
                    <div className="card" aria-hidden="true">
                        <ThumbnailImage title={'Loading...'}/>
                        <div className="card-body">
                            <h5 className="card-title placeholder-glow">
                                <span className="placeholder col-6"></span>
                            </h5>
                            <p className="card-text placeholder-glow">
                                <span className="placeholder col-7"></span>
                                <span className="placeholder col-4"></span>
                                <span className="placeholder col-4"></span>
                                <span className="placeholder col-6"></span>
                                <span className="placeholder col-8"></span>
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default LoadingCard;
