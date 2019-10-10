import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { getItem } from './helpers/local-storage';
import { initialiseClient, initialiseStore, initialiseUser } from './initialise';
import { BrowserRouter as Router } from "react-router-dom";
import './style/index.scss';

const initialise = async (): Promise<void> => {
    const token = await getItem('token');
    const client = await initialiseClient(token);  
    const user = await initialiseUser(client);
    const store = initialiseStore({ 
        client,
        user, 
    });

    return ReactDOM.render(
        <Provider store={store}>
            <Router>
                <App 
                    clientUnavailable={!client}
                    tokenExpired={token && !user}
                />
            </Router>
        </Provider>,
        document.getElementById('root')
    );
};

initialise();