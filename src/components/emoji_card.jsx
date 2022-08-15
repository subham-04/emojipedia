import React from "react";

function card(props){
    return (
        <div className="card">
            <h1>{props.icon}</h1>
            <h2 className="emoji-heading">{props.name}</h2>
            <p className="emoji-heading-desc">{props.desc}</p>
            
        </div>

    );
}

export default card;