
import React, { Component, Fragment } from 'react';
import { createStore } from 'redux';

const initialState = {
    count: 0
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'INCREMENT': {
            return {
                ...state,
                count: state.count + 1,
            }
        }
        case 'DECREMENT': {
            return {
                ...state,
                count: state.count - 1,
            }
        }
        default:
            return state;
    }
}

const store = createStore(reducer);

class Counter extends Component {
    state = {
        count: 0,
    }

    componentDidMount() {
        this.unsubscribe = store.subscribe(() => {
            const state = store.getState();
            this.setState(state);
        });
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    increment = () => {
        store.dispatch({ type: 'INCREMENT' });
    }

    decrement = () => {
        store.dispatch({ type: 'DECREMENT' });
    }

    render() {
        return (
            <Fragment>
                <button onClick={this.decrement}>-</button>
                <span>{this.state.count}</span>
                <button onClick={this.increment}>+</button>
            </Fragment>
        );
    }
}

export default Counter;
