import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './components/App';

const render = () => {
    const App = require('./components/App').default;
    ReactDOM.render(
        <AppContainer>
            <App />
        </AppContainer>,
        document.getElementById('react-container')
    );
};

render();

if (module.hot) {
    module.hot.accept('./components/App', () => {
        render();
    });
}
