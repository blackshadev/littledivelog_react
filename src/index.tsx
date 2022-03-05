import React from 'react';
import ReactDOM from 'react-dom';

import Providers from './Components/Providers';
import Router from './Routing/Router';
import GlobalStyles from './Styling/GlobalStyles';
import Header from './Header';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <Providers>
        <Header />
        <GlobalStyles />
        <Router />
    </Providers>,
    document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
