import logo from './logo.svg';
import './App.scss';
import MyComponent from './examples/MyComponent';
import TotoList from './todos/TotoList';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route } from "react-router-dom";


import Nav from './Nav/Nav';
import Home from './examples/Home';

import  ListUser  from './Users/ListUser.js';
import DetaiUser from './Users/DetaiUser';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (
    <createBrowserRouter>
      <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Switch>
          <Route path="/" exact ><Home /> </Route>   
          <Route path="/todo"><TotoList /> </Route>  
          <Route path="/about" ><MyComponent /></Route> 
          <Route path="/users" exact ><ListUser /> </Route> 
          <Route path="/users/:id" ><DetaiUser /> </Route> 
        </Switch>

      </header>

      








      <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
      />
      <ToastContainer />
    </div>


    </createBrowserRouter>
    
  );
}

export default App;
