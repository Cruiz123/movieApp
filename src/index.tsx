
import ReactDOM from 'react-dom/client';
import './index.css';
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/navigation";
import 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import React from 'react';
import {ApolloProvider} from '@apollo/client'

import {Client} from './GraphQl'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ApolloProvider client={Client}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>
);

