import React, {Component} from 'react';
import MuiModal from './MuiModal';

class MuiContainerForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            value: '',
            encryptedText: '',
        };

        this.handleChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        this.setState({ value: '' });
        event.preventDefault();
    }

    render() {
        return(
            <div>
                <MuiModal />
                <p>{this.state.encryptedText}</p>
            </div>
        )
    }


}

export default MuiContainerForm;