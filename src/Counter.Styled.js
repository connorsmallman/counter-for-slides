import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

const Count = styled.span`
    font-size: 18px;
    color: ${props => props.count > 5 ? 'red' : 'green'};
`;

class Counter extends Component {
    state = {
        count: 0
    }

    increment = () => {
        this.setState({ count: this.state.count + 1 });
    }

    decrement = () => {
        this.setState({ count: this.state.count - 1 });
    }

    render() {
        return (
            <Fragment>
                <button onClick={this.decrement}>-</button>
                <Count count={this.state.count}>{this.state.count}</Count>
                <button onClick={this.increment}>+</button>
            </Fragment>
        );
    }
}

export default Counter;
