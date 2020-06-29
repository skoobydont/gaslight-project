import React, { Component } from "react";
import ITitem from "./ITitem";
import Data from '../data.json';

class ItemList extends Component {

    data = Data

    state = {
        items: this.data
    }
    render() {
        return (
            <div className="itemList">
                <h2>Secure The Network!</h2>
                <p>Below is a list of common components used to secure networks:</p>
                <ITitem items={this.state.items}/>
            </div>
        )
    }
}

export default ItemList;