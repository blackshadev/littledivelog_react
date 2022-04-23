import React from 'react';

import { createRoot } from 'react-dom/client';

import Providers from './Components/Providers';
import Router from './Routing/Router';
import GlobalStyles from './Styling/GlobalStyles';
import Header from './Header';
import reportWebVitals from './reportWebVitals';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(document.getElementById('root')!);
root.render(
    <Providers>
        <Header />
        <GlobalStyles />
        <Router />
    </Providers>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
