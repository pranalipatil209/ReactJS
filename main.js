import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import Demo from './Demo.jsx';
import ComponentApi from './ComponentApi'

ReactDOM.render(
    <div>
      <App />
      <Demo />
      <ComponentApi />
    </div>,
    document.getElementById('app')
  );
