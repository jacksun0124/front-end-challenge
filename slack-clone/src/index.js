import React from 'react';
import ReactDOM from "react-dom/client";
import App from './modules/app.js';
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById("root"));
import { Provider } from "react-redux";
import store from './store/store.js';

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <div className="App">
                    <App />
                </div>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
