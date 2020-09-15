import { ConnectedRouter } from 'connected-react-router';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { history } from './browser-history';
import { AppContainer } from './features/app/components/app/AppContainer';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { store } from './store';

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <AppContainer />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root') as HTMLElement
);

serviceWorker.register();
