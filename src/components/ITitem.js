import React from 'react';

const ITitem = ({ items }) => {
    console.log(items)

    return(
        <div className="row">
            { items.map((item) => (
                <div className="items col-12 col-md-6">
                    <div className="card h-100">
                        <div className="card-header">
                            <h2>{item.name}</h2>
                        </div>
                        <div className="card-body">
                            <p className="card-text">{item.description}</p>
                        </div>
                        <div className="card-footer d-flex justify-content-around">
                            <a href={item.more_info.youtube} rel="noopener noreferrer" target="_blank" className="btn btn-danger">Video Reference</a>
                            <a href={item.more_info.wikipedia} rel="noopener noreferrer" target="_blank" className="btn btn-primary">More Info</a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default ITitem;