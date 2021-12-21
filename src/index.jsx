import ReactDOM from 'react-dom';
import React from 'react';
import './styles/index.sass'

const element = <h1 title='foo'>Hello</h1>
const container = document.getElementById('app')
ReactDOM.render(element, container)