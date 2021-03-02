import React from 'react'
import { render } from 'react-dom'

import './index.css'
import 'semantic-ui-css/semantic.min.css'
import App from "./App";
import {AppContainer} from "react-hot-loader";
require('react-hot-loader/patch');

render(<App/>, document.querySelector('#root'))
if(module.hot){

    module.hot.accept('./App', () => {

        const NextApp = require('./App').default;

        render(
            <AppContainer>
                <NextApp />
            </AppContainer>,
            document.getElementById('root')
        );

    });
}