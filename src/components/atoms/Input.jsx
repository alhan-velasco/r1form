import React from "react";

function Input(props) {
    const handlerOnChange = (event) => {
        props.fnVal(event.target.value);
    };

    return (
        <input
            type={props.type}
            placeholder={props.placeholder}
            value={props.val}
            onChange={handlerOnChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
    );
}

export default Input;
