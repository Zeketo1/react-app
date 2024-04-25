import React, { useState } from "react";

const Playground = () => {
    const [players, setPlayers] = useState([
        "Ronaldo",
        "Jude",
        "Garnacho",
        "Kelvin",
        "Haland",
    ]);

    const [players2, setPlayers2] = useState([
        { id: 1, name: "Rashford", club: "Manchester united" },
        { id: 2, name: "Messi", club: "Manchester united" },
        { id: 3, name: "Jude", club: "Manchester united" },
        { id: 4, name: "Haaland", club: "Manchester united" },
        { id: 5, name: "Ronaldo", club: "Manchester united" },
    ]);

    const addPlayer = () => {
        setPlayers([...players, "Harzard"]);
    };

    const removePlayer = () => {
        const newPlayers = players.filter((player) => player !== "Kelvin");
        setPlayers(newPlayers);
    };

    const updatePlayer = () => {
        const newPlayers = players.map((player) =>
            player === "Jude" ? "Francis" : player
        );
        setPlayers(newPlayers);
    };

    const updateClub = () => {
        const newPlayer = players2.map((player) => {
            return player.id == 4
                ? { ...player, club: "Manchester City" }
                : player;
        });

        setPlayers2(newPlayer);
    };

    const updateJude = () => {
        const Jude = players2.map((player) => {
            return player.id == 3 ? { ...player, club: "Real Madrid" } : player;
        });

        setPlayers2(Jude);
    };

    return (
        <>
            <ul>
                {players.map((player, index) => (
                    <li key={index}>{player}</li>
                ))}
            </ul>
            <br />
            <button onClick={addPlayer}>Add Player</button>.........
            <button onClick={removePlayer}>Remove Player</button>........
            <button onClick={updatePlayer}>Update Jude</button>.........
            <br />
            <br />
            <hr />
            <br />
            <ul>
                {players2.map((player) => (
                    <li key={player.id}>
                        {player.name} ...................... {player.club}
                    </li>
                ))}
            </ul>
            <br />
            <button onClick={updateClub}>Update Club for Haaland</button>
            .........
            <button onClick={updateJude}>Update Jude</button>
        </>
    );
};

export default Playground;
