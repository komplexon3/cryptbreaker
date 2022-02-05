import { ChakraProvider } from '@chakra-ui/react';
import { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import i18n from './i18n';
import './index.css';
import reportWebVitals from './reportWebVitals';
import theme from './theme';

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <Suspense fallback='loading'>
        <App key={i18n.language} />
      </Suspense>
    </BrowserRouter>
  </ChakraProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
