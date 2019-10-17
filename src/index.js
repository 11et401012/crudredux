import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/header/header';
import Home from './components/home/home';
import About from './components/about/about';
import Contact from './components/contact/contact';
import NotFound from './components/notfound/notfound';
import { Route,Switch, BrowserRouter as Router } from 'react-router-dom'


import postReducer from './reducers/postReducer';
const store = createStore(postReducer);
const routing = (
    <Provider store={store}>
    <Router>
    {/* <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/users">Users</Link>
        <Link to="/search?q=react">Search</Link> */}
        <div>
            <Header/>
    <Switch>
        <Route exact path="/" component={App} />
        {/* <Route path="/home" component={Home} /> */}
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={About} />
        <Route exact path="/home" component={Home}/>
        <Route  component={NotFound} />
        
</Switch>
</div>
</Router>

    </Provider>
  )
ReactDOM.render(routing,  document.getElementById('root'));

//<Router routes={routing} />