import React from 'react';
//React
import { render } from 'react-dom';
import App from './app';
///Mount function to start
const mount=(el)=>{
    render(
        <App/> ,
        el
    );
}
//if we are in development and in isolation
if (process.env.NODE_ENV === 'development') {
    const devRoot= document.getElementById('root');
    mount(devRoot);
}
//call mount immediately




//2...we are running through container
export { mount };

