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
                <ITitem items={this.state.items}/>
            </div>
        )
    }
}

export default ItemList;