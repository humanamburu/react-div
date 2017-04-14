import React from 'react';
import { render } from 'react-dom';

import Draggable from './components/draggable';

render(
    <div>
        <Draggable />
    </div>,
    document.querySelector('#react-root'));
