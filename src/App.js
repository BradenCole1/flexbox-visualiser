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
            name: "center",
            id: 2
        },
        {
            name: "space-around",
            id: 3
        },
        {
            name: 'space-evenly',
            id: 4
        }
    ];

    const [direction, setDirection] = useState('row');
    const [directionStyle, setDirectionStyle] = useState('fd__Main');
    const [justifyStyle, setJustifyStyle] = useState('justify__Main');

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

    const changeJustifyStyle = (name) => {
        if (name === "center") {
            setJustifyStyle("justify__Main");
        } else if (name === "space-between") {
            setJustifyStyle("justify__Main__space-between");
        } else if (name === "space-around") {
            setJustifyStyle("justify__Main__space-around");
        } else if (name === "space-evenly") {
            setJustifyStyle("justify__Main__space-evenly");
        }
    }

    return(
        <div className="app">
            <div className="mainHeader">
                <h1>Flexbox Visualisation</h1>
            </div>
            <FlexDirection direction={direction} directions={directions} change={changeDirection} style={directionStyle} />
            <Justify justifyOptions={justifyOptions} style={justifyStyle} click={changeJustifyStyle} />
        </div>
    )
}

export default App;