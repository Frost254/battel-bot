import React, { useState, useEffect } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
    //start here with your code for step one
    const [bots, setBots] = useState([]);
    const [botsToPush, setbotsToPush] = useState({ bots })
    const [botsUpdated, setbotsUpdated] = useState({ bots })

    function HandleAdd(id) {
        setbotsToPush(bots.filter((item) => item.id === id))
        console.log("Works")
    }

    function HandleDelete(id) {

        setbotsUpdated(bots.filter((item) => item.id !== id));
        console.log(botsUpdated)
            // fetch(`http://localhost:8002/bots/${id}`, {
            //         method: "DELETE",
            //     })
            //     .then((r) => r.json())
            //     .then(() => console.log("deleted!"));
    }

    useEffect(() => {
        fetch("http://localhost:8002/bots")
            .then((r) => r.json())
            .then((items) => setBots(items));
    }, []);

    console.log(bots)

    return ( <
        div >
        <
        YourBotArmy bots = { botsToPush }
        / > <
        BotCollection bots = { bots }
        handleAdd = { HandleAdd }
        handleDelete = { HandleDelete }
        / > < /
        div >
    )
}

export default BotsPage;