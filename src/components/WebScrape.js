import React, { Component } from 'react';

class WebScrape extends Component {
    render() {
        return(
            <div>
                <h2>Web Scraping with Python</h2>
                <a href="https://www.youtube.com/watch?v=F1kZ39SvuGE" rel="noopener noreferrer" target="_blank" className="btn btn-dark">Video Reference</a>
                <p>From initial research, there are various node libraries that take python code and translate it to javascript.</p>
                <ul>
                    <li>Transcrypt: https://www.transcrypt.org/home</li>
                    <li>Pyjs: http://pyjs.org/</li>
                </ul>
                <p>For this project's purposes, that is basically the reverse of what I would like to do. I want to be able to run a web scraping python script from this React application (see video reference above).</p>
                <p>Below are some potential node libraries that could interpret python code and return results for evaluation:</p>
                <ul>
                    <li>Python-Bridge: https://www.npmjs.com/package/python-bridge</li>
                    <li>Node.js child process article: https://medium.com/swlh/run-python-script-from-node-js-and-send-data-to-browser-15677fcf199f</li>
                </ul>
            </div>
        )
    }
}

export default WebScrape;