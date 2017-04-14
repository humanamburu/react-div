import React, { PureComponent } from 'react';

export default class Draggable extends PureComponent {
    constructor(props) {
        super(props);
        this.onMouseMove = this.handleMouseMove.bind(this);
        this.onMouseDown = this.handleMouseDown.bind(this);
        this.onMouseUp = this.handleMouseUp.bind(this);
    }

    handleMouseMove(e) {
        console.log(`translate3d(${e.screenX}, ${e.screenY}, 0)`)
    }

    handleMouseDown() {
        document.addEventListener('mousemove', this.onMouseMove);
        document.addEventListener('mouseup', this.onMouseUp);
    }

    handleMouseUp() {
        document.removeEventListener('mousemove', this.onMouseMove);
    }

    componentDidMount() {
        this.element.addEventListener('mousedown', this.onMouseDown);
    }

    render() {
        const style = {
            backgroundColor: 'red',
            width: 100,
            height: 100,
            transform: 'translate3d(0, 0, 0)'
        };

        return <div style={style} ref={element => this.element = element}>{this.props.childern}</div>
    }
}
