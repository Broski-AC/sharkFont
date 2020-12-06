import React from 'react';
import logo from './shark.png';
import './title.css';

function Title () {
    return (
        <div className='titleBox'>
            <img src={logo} alt='shar'/>
        </div>
    )
}

export default Title;