// @flow
import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    background-color: ${props => props.backgroundColor || 'white'};
`;

type Props = {
    backgroundColor: string,
}

type State = {
    count: number,
}

class Counter extends Component<Props, State> {
    state: State = {
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
            <Container backgroundColor={this.props.backgroundColor}>
                <button onClick={this.decrement}>-</button>
                <span>{this.state.count}</span>
                <button onClick={this.increment}>+</button>
            </Container>
        );
    }
}

export default Counter;