
import React, { Component, Fragment } from 'react';
import { delay, mapTo } from 'rxjs/operators';
import { createEpicMiddleware, ofType } from 'redux-observable';
import { createStore, applyMiddleware } from 'redux';

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

function epic(action$) {
    return action$.pipe(
        ofType('INCREMENT'),
        delay(1000),
        mapTo({ type: 'DECREMENT'}),
    )
}

const epicMiddleware = createEpicMiddleware();

const store = createStore(reducer, applyMiddleware(epicMiddleware));

epicMiddleware.run(epic);

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
