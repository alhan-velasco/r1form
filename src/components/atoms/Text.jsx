import React from 'react';

function Text(props) {
    return (
        <div style={{ width: "100%" }}>
            <p>{props.text}</p>
        </div>
    );
}

export default Text;
