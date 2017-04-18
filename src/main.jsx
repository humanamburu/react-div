import './_main.styl';

import React from 'react';
import { render } from 'react-dom';

import Draggable from './components/draggable/draggable';
import Hourglass from './components/hourglass/hourglass';

render(
    <div>
        <div className="wrapper">
            <span className="tip">This is an example of the <span>React</span> draggable component</span>
            <Draggable>
                <div className="hourglass-container">
                    <Hourglass/>
                </div>
            </Draggable>
        </div>
    </div>,
    document.querySelector('#react-root')
);
