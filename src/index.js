import React from 'react';
import ReactDOM from 'react-dom/client';

const root= ReactDOM.createRoot(document.getElementById('root'));

var text=''

for(let x=0;x<100;x++){
  text=x
}

const elements = <h1>{text}</h1>

root.render(elements);