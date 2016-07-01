import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import Demo from './Demo.jsx';
import Demo1 from './Demo1.jsx';
import Methods from './Methods.jsx';
import Form1 from './Form1.jsx';

ReactDOM.render(
    <div>
      <App />
      <Demo />
      <Demo1 />
      <Methods />
      <Form1 />
    </div>,
    document.getElementById('app'));

    // setTimeout(() => {
    //   ReactDOM.unmountComponentAtNode(document.getElementById('app'));
    // }, 20000);
