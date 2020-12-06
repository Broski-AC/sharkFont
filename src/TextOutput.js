import React from 'react';
import './textOutput.css';

function TextOutput(props){

    return (
        <div className="textOutput"> 
            <h1>{props.translationText}</h1>
        </div>
    )
}

export default TextOutput;