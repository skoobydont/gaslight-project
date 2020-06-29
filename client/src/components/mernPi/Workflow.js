import React, { Component } from 'react';

class WorkFlow extends Component {
    render() {
        return(
            <div className="mernpi-workflow">
                <ol>
                    <li>First verify that node is installed on your machine:</li>
                    <code>node -v</code>
                    <li><a href="https://www.mongodb.com/try/download/community" rel="noopener noreferrer" target="_blank">Install MongoDB</a></li>
                    <li>Next install required dependencies: 
                        <ul>
                            <li>React: <code>npm install react -g</code>
                                <ul>
                                    <li>To run the React application, run <code>npm start</code></li>
                                </ul>
                            </li>
                            <li>Express: <code>npm install express</code>
                                <ul>
                                    <li>To initialize the server, run <code>npm run devStart</code></li>
                                </ul>
                            </li>
                            <li>Mongoose (as a middleware between Express and MongoDB): <code>npm install mongoose</code></li>
                        </ul>
                    </li>
                    <li>There are a couple of development dependencies to install also: 
                        <ul>
                            <li>Dotenv (to pull environment variables from a .env file) and Nodemon (to refresh server when changes are made without manually ending and restarting)</li>
                            <li>can be executed in a single command: <code>npm i --save-dev dotenv nodemon</code></li>                            
                        </ul>
                    </li>
                </ol>
            </div>
        )
    }
}

export default WorkFlow;