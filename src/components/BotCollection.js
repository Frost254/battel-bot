import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, handleAdd, handleDelete }) {
    // Your code here

    return ( <
        div className = "ui four column grid" >
        <
        div className = "row" > { /*...and here..*/
            bots.map(bot => ( <
                BotCard key = { bot.id }
                id = { bot.id }
                bot = { bot }
                handleDelete = { handleDelete }
                handleAdd = { handleAdd }
                />
            ))
        }
        Collection of all bots <
        /div> < /
        div >
    );
}

export default BotCollection;