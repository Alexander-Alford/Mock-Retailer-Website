import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

export function RenderApp()
{
ReactDOM.render( <App />, document.getElementById('root') );
}

RenderApp();
