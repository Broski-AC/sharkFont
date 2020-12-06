import React from 'react';
import './textInput.css';
import shark from './shark.png';
import Particles from 'react-tsparticles';
import ParticlesBg from 'particles-bg'


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
        let config = {
            num: [1, 2],
            rps: 0.1,
            radius: [5, 40],
            life: [1.5, 3],
            v: [1, 2],
            tha: [-40, 40],
            alpha: [1, 0],
            scale: [.1, 0.4],
            position: "all",
            color: ["random", "#ff0000"],
            cross: "bround",
            // emitter: "follow",
            random: 15,
            body: "https://i.imgur.com/j0snvy3.png"
          };
        return (
        <div>
        <div className="particles">
            <ParticlesBg type="custom" config={config} bg={true} />
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