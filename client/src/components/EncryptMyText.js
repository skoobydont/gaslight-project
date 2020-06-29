import React, { Component } from 'react';
import EncryptTextForm from './EncryptForm';

class EncryptMyText extends Component {
    render() {
        return(
            <div>
                <h2>Encrypt My Text</h2>
                <EncryptTextForm/>
            </div>
        )
    }

}

export default EncryptMyText;