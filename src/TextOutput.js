import React, {useState, useEffect} from 'react';
import './textOutput.css';

function TextOutput(props){

    const [blueColor, setColor] = useState(false)

    useEffect(() => {
        if (props.translationText !== ''){
            setColor(true);
        } else {
            console.log('No text yet');
        }
    }, [props.translationText]);

    return (
        <div className={blueColor ? "textOutput" : 'noText'}> 
            <h1 className="sharkFont">{props.translationText}</h1>
        </div>
    )
}

export default TextOutput;