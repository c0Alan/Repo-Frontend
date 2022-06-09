const ReactDOM = require('react-dom');
const React = require('react');
// import ReactDOM from 'react-dom';
// import React from 'react';

const App = () => {
    return <div>我是新网页！</div>;
};

const root = document.getElementById('app');
ReactDOM.render(<App />, root);