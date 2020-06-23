import React, { Component } from 'react';

class PiComponent extends Component {
    render() {
        return(
            <div className="card">
                <div className="card-header" id={this.props.title+"-title"}>
                    <h2 className="mb-0">
                        <button className="btn btn-link" type="button" data-toggle="collapse" data-target={"#"+this.props.title} aria-expanded="true" aria-controls={this.props.title}>
                            {this.props.title}
                        </button>
                    </h2>
                </div>
                <div id={this.props.title} className="collapse" aria-labelledby={this.props.title} data-parent="#mernAccordion">
                    <div className="card-body d-flex justify-content-around">
                        <a href={this.props.info} rel="noopener noreferrer" target="_blank" className="btn btn-primary">More Info</a>
                        <a href={this.props.gettingStarted} rel="noopener noreferrer" target="_blank" className="btn btn-primary">Getting Started</a>
                        <a href={this.props.tutorial} rel="noopener noreferrer" target="_blank" className="btn btn-primary">Tutorial</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default PiComponent;