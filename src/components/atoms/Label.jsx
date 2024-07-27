import React from "react";

function Label(props) {
    return (
        <label className="block text-sm font-medium text-gray-700">{props.text}</label>
    );
}

export default Label;
