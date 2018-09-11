import React, { Component, Fragment } from 'react';

class Counter extends Component {
    state = {
        count: 0
    }

    increment = () => {
        this.setState(state => ({ count: state.count + 1 }));
    }

    decrement = () => {
        this.setState(state => ({ count: state.count - 1 }));
    }

    render() {
        return (
            <Fragment>
                <button onClick={this.decrement}>-</button>
                <span>{this.state.count}</span>
                <button className={'increment'}  onClick={this.increment}>+</button>
            </Fragment>
        );
    }
}

export default Counter;
