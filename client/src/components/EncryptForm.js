import React, {Component} from 'react';
import Cryptr from 'cryptr';

const cryptr = new Cryptr('dontShareMeWithAnyone');

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

    encrypt(input) {
        this.setState({ encryptText: cryptr.encrypt(input) });
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        this.encrypt(this.state.value);
        this.setState({ value: '' });
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
                    <input type="submit" value="Encrypt"/>
                </form>
                <textarea value={this.state.encryptText} onChange={this.handleChange}/>
            </div>
        )
    }


}

export default EncryptTextForm;