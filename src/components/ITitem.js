import React from 'react';

const ITitem = ({ items }) => {
    return(
        <div>
            <h1>Meet The Team</h1>
            { items.map((item) => (
                <div class="card">
                    <div class="card-body">
                        <p>{item}</p>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default ITitem;