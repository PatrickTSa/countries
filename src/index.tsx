import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
import { ThemeProvider } from 'styled-components';
import { ApolloProvider } from '@apollo/client';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import theme from '~/assets/colors/themes/default';
import client from './services/country';
import store from './redux/store';
import Routes from './components/Routes';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <ApolloProvider client={client}>
          <Routes />
        </ApolloProvider>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
