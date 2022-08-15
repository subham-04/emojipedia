import React from "react";
import Card from "./emoji_card";
import emojis from "../emoji_dictionary";

function createEmoji(emj){
        return(    <Card 
            key={emj.id}
            icon={emj.emoji} 
            name={emj.name} 
            desc={emj.category}  
            code={emj.html}
            />);
}


function app(){

    return (
    <div>
    <h1 className="heading">emojipedia</h1>
    
    <div className="emoji-boxes">
        {emojis.map(createEmoji)}
    </div>
    


    
    

    </div>
    );
}

export default app;