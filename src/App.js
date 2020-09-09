import React, {useState} from 'react';
import './app.css';
import FlexDirection from './FlexDirection';
import Justify from './Justify';

const App = () => {
    const directions = [
        {
            name: "row",
            id: 1
        },
        {
            name: 'column',
            id: 2
        },
        {
            name: 'column-reverse',
            id: 3
        },
        {
            name: 'row-reverse',
            id: 4
        }
    ];

    const justifyOptions = [
        {
            name: "space-between",
            id: 1
        },
        {
            name: "space-around",
            id: 2
        }
    ];

    const [direction, setDirection] = useState('row');
    const [directionStyle, setDirectionStyle] = useState('fd__Main');

    const changeDirection = (name) => {
          if (name === 'column') {
              setDirectionStyle('fd__Main__column');
          } else if (name === 'row') {
              setDirectionStyle('fd__Main');
          } else if (name === 'column-reverse') {
              setDirectionStyle('fd__Main__columnReverse');
          } else if (name === 'row-reverse') {
              setDirectionStyle('fd__Main__rowReverse');
          }
    }

    return(
        <div className="app">
            <div className="mainHeader">
                <h1>Flexbox Visualisation</h1>
            </div>
            <FlexDirection direction={direction} directions={directions} change={changeDirection} style={directionStyle} />
            <Justify />
        </div>
    )
}

export default App;