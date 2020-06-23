import React, { Component } from 'react';

class WorkFlow extends Component {
    render() {
        return(
            <div className="mernpi-workflow">
                <ol>
                    <li>Configure Raspberry Pi with Debian</li>
                    <li><a href="https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-debian-10" rel="noopener noreferrer" target="_blank">Install Node and npm</a></li>
                    <code> sudo apt install nodejs npm </code> and verify installation with <code> node -v </code> and <code> npm -v </code>
                    <li><a href="https://www.instructables.com/id/How-to-Make-a-Web-Server-With-a-Raspberry-Pi/" rel="noopener noreferrer" target="_blank">Install Express</a></li>
                    <code>sudo npm install express -g</code>
                    <li><a href="https://pimylifeup.com/mongodb-raspberry-pi/" rel="noopener noreferrer" target="_blank">Install MongoDB</a></li>
                    <code>sudo apt install mongodb</code>
                    <li>Install React</li>
                    <code>sudo npm install react -g</code>
                    <li>Next, we will set up a MongoDB instance that the Express API will interact with. Our React App will consume said Express API</li>
                </ol>
            </div>
        )
    }
}

export default WorkFlow;