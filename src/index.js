import React from 'react';
import ReactDOM from 'react-dom/client';

const root= ReactDOM.createRoot(document.getElementById('root'));

const elements = (
  <table>
    <tr>
      <th>Name</th>
    </tr>
    <tr>
      <td>John</td>
    </tr>
    <tr>
      <td>Elsa</td>
    </tr>
  </table>
);

root.render(elements);