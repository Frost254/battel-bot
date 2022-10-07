import React, { useState, useEffect } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
    //start here with your code for step one
    const [bots, setBots] = useState([]);
    const [botsToPush, setbotsToPush] = useState([bots])

        useEffect(() => {
        fetch("http://localhost:8002/bots")
            .then((r) => r.json())
            .then((items) => setBots(items));
    }, []);
    
    function HandleAdd(id) {
        const botsArray = [];
        bots.filter(item => (item.id === id ? botsArray.push(item) : ""))
        setbotsToPush(botsArray)
    }

    return ( 
    <div>
        <YourBotArmy bots = { botsToPush }/> 
        <BotCollection bots = { bots }
        handleAdd = { HandleAdd }/> 
        </div>
    )
}

export default BotsPage;