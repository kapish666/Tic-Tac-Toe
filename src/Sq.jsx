import React, { useState } from "react";


function Sq({value,onSqClick}){
    return(
        <button className="square bg-gray-200" onClick={onSqClick}>
            {value}
        </button>
    )
}
export default Sq;