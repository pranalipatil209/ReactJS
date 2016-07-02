import React from 'react';
import App from './App.jsx';
import Demo from './Demo.jsx';
import Demo1 from './Demo1.jsx';
import Methods from './Methods.jsx';
import Form1 from './Form1.jsx';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';

class index extends React.Component (){
  render(){
    return (
      <div>
        <ul>
          <li><Link to="app">App.jsx</Link></li>
          - React Components, dynamic rendering of table & changing style of element dynamically.
          <li><Link to="demo">Demo.jsx</Link></li>
          - states & props
          <li><Link to="demo1">Demo1.jsx</Link></li>
          - setState(), forceUpdate() & findDOMNode() methods
          <li><Link to="form1">Form1.jsx</Link></li>
          - events & refs
          <li><Link to="methods">Methods.jsx</Link></li>
          - Methods -> componentWillMount, componentDidMound, componentWillReceiveProps, shouldComponentUpdate, componentWillUpdate, componentDidUpdate, componentWillUnmount.
        </ul>
        <hr/>
        {this.props.children}
      </div>
    )
  }
}

export default index;
