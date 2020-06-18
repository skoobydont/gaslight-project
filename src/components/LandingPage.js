import React, { Component } from "react";

class LandingPage extends Component {
    render() {
        return(
            <div className="landing-page">
                <h2>Learning React</h2>
                <p>Welcome to my journey of learning the React framework!</p>
                <p>I find the framework interesting due to it's ability to abstract functionalities easily and display content dynamically.</p>
                <p>Outside of web development, I enjoy learning any and every thing about the IT world!</p>
                <p>Below are some of the topics I am currently learning about:</p>
                <ul>
                    <li>JavaScript (React framework primarily)</li>
                    <li>Web Scraping (with Python)</li>
                    <li>Network Security (cyber security in general)</li>
                </ul>
            </div>
        )
    }
}

export default LandingPage;