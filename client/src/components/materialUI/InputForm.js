import React, {Component} from 'react';
import { TextField, Button, } from '@material-ui/core';
import Cryptr from 'cryptr';

const cryptr = new Cryptr('3ncrypt10nK3y');

class MuiTextForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            value: '',
            encryptText: '',
        
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
        this.setState({ value: this.encrypt(event.target.value) });
        
        event.preventDefault();
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <TextField
                        label="Encrypted Text Result"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={this.handleChange}
                    />
                    <br/>
                    <Button 
                        variant="contained"
                        color="primary"
                        type="submit"
                    >
                        Encrypt
                    </Button>
                </form>
                    
            </div>
        )
    }


}

export default MuiTextForm;