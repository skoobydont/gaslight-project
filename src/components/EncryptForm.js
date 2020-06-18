import React, {Component} from 'react';
import Crypt from 'cryptr';

const cryptr = new Crypt('dontShareThisKey');

class EncryptTextForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            value: '',
            encryptText: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    encrypt() {
        var text = cryptr.encrypt(this.state.value);
        this.setState( { encryptText: text } );
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        this.encrypt();
        event.preventDefault();
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Enter Text:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
                <textarea value={this.state.encryptText} onChange={this.handleChange}/>
            </div>
        )
    }


}

export default EncryptTextForm;