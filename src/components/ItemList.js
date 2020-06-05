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
                <ITitem items={this.state.items}/>
            </div>
        )
    }
}

export default ItemList;