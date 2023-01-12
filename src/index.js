import "./index.css";
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
import {theme,ChakraProvider} from "@chakra-ui/react";
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
const client=new QueryClient();
root.render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </QueryClientProvider>
    </ChakraProvider>
  </StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
