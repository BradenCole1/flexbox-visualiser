import React from 'react';
import './justify.css';

const Justify = () => {
    return(
        <div className="justify__Body">
            <div className="justify__Header">
                Jusify Content
            </div>
            <div className="justify__Main">
                <div className="itemA">1</div>
                <div className="itemB">2</div>
                <div className="itemC">3</div>
            </div>

            <div className="justify__Options">
                Options
            </div>
        </div>
    )
}

export default Justify;