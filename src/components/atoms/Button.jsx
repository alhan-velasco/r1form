import React from "react";

function Button({ title, onclick }) {
    return (
        <button 
            onClick={onclick} 
            className="w-full py-2 bg-black text-white font-semibold rounded-md "
        >
            {title}
        </button>
    );
}

export default Button;
