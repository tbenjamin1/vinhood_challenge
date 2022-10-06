import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Application from './Application'
import { Provider } from 'react-redux'
import { store } from '@store/store'

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Application />
        </Provider>

    </React.StrictMode>,
    document.getElementById('root')
)
