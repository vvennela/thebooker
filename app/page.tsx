'use client';
import React, { useState } from "react";


export default function Page() {
    const [team1, setTeam1] = useState("");
    const [team2, setTeam2] = useState("");

    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen transform translate-y-[-25vh] mb-2">
                <h1 className="text-4xl text-white">Welcome to theBooker!</h1>
                <h3 className="text-2xl text-white mt-2">Our prediction algorithm allows you to enter a matchup and see the predicted result</h3>
                <p>Enter team names/cities or a combination of both (example: ATL, ATLANTA HAWKS, ATLANTA, HAWKS)</p>
            </div>
            <div className="flex flex-col items-center justify-center mt-[-35em]">
                <div className="flex space-x-4">
                    <input className="rounded-lg p-2 border-2 border-gray-300" name="team1" placeholder="Team 1" value={team1} onChange={(e) => setTeam1(e.target.value)} />
                    <input className="rounded-lg p-2 border-2 border-gray-300" name="team2" placeholder="Team 2" value={team2} onChange={(e) => setTeam2(e.target.value)} />
                    <button className="rounded-lg bg-blue-500 text-white p-2">Predict!</button>
                </div>
            </div>
        </>
    );
}

