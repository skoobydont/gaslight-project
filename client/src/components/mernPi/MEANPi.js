import React, { Component } from 'react';
import WorkFlow from './Workflow';
import PiComponent from './PiComponent';

class MEANPi extends Component {
    render() {
        return(
            <div className="meanpi">
                <h2>ME(A/R)N Stack</h2>
                <p>ME(A/R)N is an acronym for the JavaScript stack consisting of:</p>
                <div className="accordion" id="mernAccordion">
                    <PiComponent title="MongoDB" info="https://en.wikipedia.org/wiki/MongoDB" 
                        gettingStarted="https://docs.mongodb.com/manual/installation/" tutorial="https://docs.mongodb.com/manual/introduction/" />
                    <PiComponent title="Express" info="https://expressjs.com/"
                        gettingStarted="https://expressjs.com/en/starter/installing.html" tutorial="https://expressjs.com/en/starter/hello-world.html" />
                    <PiComponent title="React" info="https://reactjs.org/"
                        gettingStarted="https://reactjs.org/docs/getting-started.html" tutorial="https://reactjs.org/tutorial/tutorial.html" />
                    <PiComponent title="NodeJS" info="https://nodejs.org/en/"
                        gettingStarted="https://nodejs.org/en/download/" tutorial="https://nodejs.org/en/docs/" />
                </div><br/>
                <p>MEAN is a free and open-source JavaScript software stack for building dynamic web sites and web applications.</p>
                <p>Because all components of the MEAN stack support programs that are written in JavaScript, one language can be used to develop both server-side and client-side execution environments</p>
                <p>This component will document the process of my research and implementation of the MERN Stack</p>
                <small>(I have more experience with React over Angular)</small>
                <h2>General Steps Outline</h2>
                <WorkFlow />
            </div>
        )
    }
}

export default MEANPi;