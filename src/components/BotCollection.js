import React, { useState } from "react";
import BotCard from "./BotCard";

function BotCollection({ bots }) {
    // Your code here
    const [botsUpdated, setbotsUpdated] = useState({ bots })

    function HandleAdd(id) {
        console.log("works")
        console.log(id)
    }

    function HandleDelete(id) {

        setbotsUpdated(bots.filter((item) => item.id !== id));
        console.log(botsUpdated)
        fetch(`http://localhost:8002/bots/${id}`, {
                method: "DELETE",
            })
            .then((r) => r.json())
            .then(() => console.log("deleted!"));
    }

    return ( <
        div className = "ui four column grid" >
        <
        div className = "row" > { /*...and here..*/
            bots.map(bot => ( <
                BotCard key = { bot.id }
                id = { bot.id }
                bot = { bot }
                handleDelete = { HandleDelete }
                handleAdd = { HandleAdd }
                />
            ))
        }
        Collection of all bots <
        /div> < /
        div >
    );
}

export default BotCollection;