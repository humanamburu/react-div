import './_draggable.styl';

import React, { PureComponent } from 'react';

export default class Draggable extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            x: 0,
            y: 0,
        };
        this.lastPosition = {
            x: 0,
            y: 0,
        };

        this.onMouseMove = this.handleMouseMove.bind(this);
        this.onMouseDown = this.handleMouseDown.bind(this);
        this.onMouseUp = this.handleMouseUp.bind(this);
    }

    updateLastPosition(e) {
        this.lastPosition.x = e.clientX;
        this.lastPosition.y = e.clientY;
    }

    handleMouseMove(e) {
        const deltaX = e.clientX - this.lastPosition.x;
        const deltaY = e.clientY - this.lastPosition.y;

        this.setState({
            x: this.state.x + deltaX,
            y: this.state.y + deltaY,
        });

        this.updateLastPosition(e);
    }

    handleMouseDown(e) {
        document.addEventListener('mousemove', this.onMouseMove);
        document.addEventListener('mouseup', this.onMouseUp);

        this.updateLastPosition(e);
    }

    handleMouseUp() {
        document.removeEventListener('mousemove', this.onMouseMove);
        document.removeEventListener('mouseup', this.onMouseUp);
    }

    componentDidMount() {
        this.element.addEventListener('mousedown', this.onMouseDown);
    }

    componentWillUnmount() {
        this.element.removeEventListener('mousedown', this.onMouseDown);
    }

    render() {
        const position = {
            transform: `translate3d(${this.state.x}px, ${this.state.y}px, 0)`
        };

        return <div className="draggable" style={position} ref={element => this.element = element}>{this.props.children}</div>
    }
}
