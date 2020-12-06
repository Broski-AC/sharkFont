import React from 'react';
import './textInput.css';
import shark from './shark.png';
import Particles from 'react-tsparticles';

class TextInput extends React.Component {

    constructor(props){
        super();
        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({value: event.target.value});
    }

    handleSubmit(event){
        this.props.handleTranslate(this.state.value);
        this.setState({value: ''})
        event.preventDefault();
    }

    render(){
        return (
        <div>
            <div className="particles">
                <Particles
                    id="tsparticles"
                    options={{
                    background: {
                        color: {
                        value: '#5f9ea0',
                        },
                    },
                    fpsLimit: 60,
                    interactivity: {
                        detectsOn: "canvas",
                        events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: false,
                            mode: "repulse",
                        },
                        resize: true,
                        },
                        modes: {
                        bubble: {
                            distance: 400,
                            duration: 2,
                            opacity: 0.8,
                            size: 40,
                        },
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                        },
                    },
                    particles: {
                        color: {
                        value: "#ffffff",
                        },
                        links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                        },
                        collisions: {
                        enable: true,
                        },
                        move: {
                        direction: "none",
                        enable: true,
                        outMode: "bounce",
                        random: false,
                        speed: 6,
                        straight: false,
                        },
                        number: {
                        density: {
                            enable: true,
                            value_area: 800,
                        },
                        value: 80,
                        },
                        opacity: {
                        value: 0.5,
                        },
                        shape: {
                            options: {
                                image: {
                                    height: 100,
                                    replace_color: false,
                                    src: './shark.png',
                                    width: 100,
                                }
                            },
                        type: "image",
                        },
                        size: {
                        random: false,
                        value: 5,
                        },
                    },
                    detectRetina: true,
                    }}
                />
            </div>
            <div className='formInput'>
                <form className='form' onSubmit={this.handleSubmit}>
                    <label className='sharkLabel'> Enter text below </label>
                    <textarea className='textArea' value={this.state.value} onChange={this.handleChange}/>
                    <input className="submit" type="submit" value="Summon the Shiver!" />
                </form>
            </div>
        </div>
        )
    }
}

export default TextInput;