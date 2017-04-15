import React from 'react';
import { render } from 'react-dom';

import Draggable from './components/draggable/draggable';

render(
    <div>
        <Draggable>
            <span>Hello world!</span>
        </Draggable>
    </div>,
    document.querySelector('#react-root'));
