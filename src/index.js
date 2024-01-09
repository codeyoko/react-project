import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/global.scss';
import App from './views/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom' 

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './store/reducers/rootReducer'

const reduxStore = createStore(rootReducer);
const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
     <React.StrictMode>
        <Provider store={reduxStore}>
          <App />
        </Provider>
      
    </React.StrictMode>
  </BrowserRouter>
 

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
