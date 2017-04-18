import './_hourglass.styl';

import React, { PureComponent } from 'react';

export default class Hourglass extends PureComponent {
    render() {
        return (
            <div className="hourglass">
                <div className="glass top"></div>
                <div className="glass bottom"></div>
            </div>
        );

    }
}
