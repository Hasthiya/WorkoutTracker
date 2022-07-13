import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Provider} from 'react-redux';

import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './Components/App/App';
import {HomePage} from "./Pages/HomePage/HomePage";
import {SettingsPage} from "./Pages/SettingsPage/SettingsPage";
import {store} from "./State";
import {AuthProvider} from "./Modules/Auth/AuthProvider";
import {LoginPage} from "./Pages/LoginPage/LoginPage";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <AuthProvider>
            <Provider store={store}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<App/>}>
                            <Route path="home" element={<HomePage/>}/>
                            <Route path="settings" element={<SettingsPage/>}/>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </Provider>
        </AuthProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
