import React, { useState, useEffect } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
    //start here with your code for step one
    const [bots, setBots] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8002/bots")
            .then((r) => r.json())
            .then((items) => setBots(items));
    }, []);

    console.log(bots)

    return ( <
        div >
        <
        YourBotArmy bots = { bots }
        / > <
        BotCollection bots = { bots }
        / > < /
        div >
    )
}

export default BotsPage;