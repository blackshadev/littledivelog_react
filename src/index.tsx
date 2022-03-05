import React from 'react';
import ReactDOM from 'react-dom';

import Providers from './components/Providers';
import GlobalStyle from './global.style';
import Header from './Header';
import reportWebVitals from './reportWebVitals';
import ResetStyle from './reset.style';
import Router from './Router';

ReactDOM.render(
    <React.StrictMode>
        <Providers>
            <Header />
            <ResetStyle />
            <GlobalStyle />
            <Router />
        </Providers>
    </React.StrictMode>,
    document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
