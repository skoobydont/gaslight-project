import React, { Component } from "react";
import ITitem from "./ITitem";

class ItemList extends Component {
    itemList = ["firewall", "vpn", "intusion detection system", "intrusion prevention system", "router", "switch",
     "proxy", "load balancer", "access point", "siem", "ssl accelerator", ];

    state = {
        items: this.itemList
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