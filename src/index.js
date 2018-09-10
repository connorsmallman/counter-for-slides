import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import CounterWithStore from './Counter.Store';
import CounterWithAsyncObservable from './Counter.Observable';
import CounterWithStyles from './Counter.Styled';
import CounterWithFlow from './Counter.Flow';

ReactDOM.render(<Counter />, document.getElementById('root'));