import React from 'react';

const ITitem = ({ items }) => {
    console.log(items)
    return(
        <div>
            <h1>Meet The Team</h1>
            { items.map((item) => (
                <div className="card">
                    <div className="card-body">
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                        <a href={item.more_info.youtube} rel="noopener noreferrer" target="_blank">For more info</a>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default ITitem;