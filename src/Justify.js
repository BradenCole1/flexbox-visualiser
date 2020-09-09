import React from 'react';
import './justify.css';

const Justify = ({ justifyOptions, style, click }) => {
    return(
        <div className="justify__Body">
            <div className="justify__Header">
                Jusify Content
            </div>
            <div className={style}>
                <div className="itemA">1</div>
                <div className="itemB">2</div>
                <div className="itemC">3</div>
            </div>

            <div className="justify__Options">
                <div className="buttons">
                    {justifyOptions.map(option => <button onClick={() => click(option.name)}>{option.name}</button>)}
                </div>
            </div>
        </div>
    )
}

export default Justify;