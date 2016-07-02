import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import App from './App.jsx';
import Demo from './Demo.jsx';
import Demo1 from './Demo1.jsx';
import Methods from './Methods.jsx';
import Form1 from './Form1.jsx';

class index1 extends React.Component {
   render() {
      return (
         <div>
            <ul>
               <li><Link to="app">App.jsx</Link></li>
               <li><Link to="demo">Demo.jsx</Link></li>
               <li><Link to="demo1">Demo1.jsx</Link></li>
               <li><Link to="form1">Form1.jsx</Link></li>
               <li><Link to="methods">Methods.jsx</Link></li>
            </ul>

           {this.props.children}
         </div>
      )
   }
}

export default index1;



ReactDOM.render((
   <Router history = {browserHistory}>
      <Route path = "/" component = {index1}>
         <IndexRoute component = {app} />
         <Route path = "app" component = {App} />
         <Route path = "demo" component = {Demo} />
         <Route path = "demo1" component = {Demo1} />
         <Route path = "form1" component = {Form1} />
         <Route path = "methods" component = {Methods} />
      </Route>
   </Router>

), document.getElementById('app'));
