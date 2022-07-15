import React from "react";

function Listgames(props){
   return (props.trigger) ? (<div className="popup">
    <div className="popup-content">
        <div className="close">X</div>
        {props.children}
    </div>
   </div>) : "";
}

export default Listgames;