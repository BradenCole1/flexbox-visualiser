import React from 'react';
import './felxdirection.css';

const FlexDirection = ({ direction, directions, change, style}) => {
    return( 
        <div className="flexDirection__Main">
            <div className="fd__Header">
                <h1>Flex Direction</h1>
            </div>

            <div className={style}>
                <div className="A">A
                </div>
                <div className="B">B
                </div>
                <div className="C">C
                </div>
            </div>

            <div className="fd__Options">
                <p>Select a flex direction:</p>
                <div className="buttons">
                    {directions.map(dir => <button className="dirButton" key={dir.id} onClick={() => change(dir.name)}>{dir.name}</button>)}
                </div>
            </div>
        </div>
    )
}

export default FlexDirection;