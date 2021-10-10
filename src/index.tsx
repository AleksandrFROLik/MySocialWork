import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogData = [
        {id: 1, name: 'Ivan'},
        {id: 2, name: 'Anton'},
        {id: 3, name: 'Petr'},
        {id: 4, name: 'Egor'},
        {id: 5, name: 'Anna'},
        {id: 6, name: 'Sveta'},
        {id: 7, name: 'Tania'},
    ]


    let messageData = [
        {id: 1, message: 'Hello!'},
        {id: 2, message: 'Hello'},
        {id: 3, message: 'How are you?'},
        {id: 4, message: 'Bye!'},

    ]

ReactDOM.render(
  <React.StrictMode>
    <App dialogData={dialogData} messageData={messageData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();