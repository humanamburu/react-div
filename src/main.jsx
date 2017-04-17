import './_main.styl';

import React from 'react';
import { render } from 'react-dom';

import Draggable from './components/draggable/draggable';

render(
    <div>
        <Draggable>
            <div className="red-sqare">Hello world!</div>
        </Draggable>
    </div>,
    document.querySelector('#react-root'));
