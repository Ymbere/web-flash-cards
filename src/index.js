import React from 'react';
import ReactDOM from 'react-dom';

//Redux
import { Provider } from 'react-redux'
import { createStore } from 'redux'

//Redux folders
import reducers from './redux/reducers'
import middleware from './redux/middleware'

//css
import App from './App';
import './utils/styles.css'

const store = createStore(reducers, middleware)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
document.getElementById('root'));
