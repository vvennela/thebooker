'use client';
import React from "react";
import {useState} from "react";
import Dropdown from "./lib/dropdown";

type TeamType = { value: string, label: string };

export default function Page() {
    const [selectedTeam, setSelectedTeam] = useState<TeamType | null>(null);

    const handleClick = async () => {
        const response = await fetch("http://localhost:5000/predict", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                team: selectedTeam?.value
            })
        });

        if (!response.ok) {
            console.error(`HTTP error! status: ${response.status}`);
        } else {
            console.log("Data sent successfully");
        }
    };
    return (
        <main className="flex flex-col justify-center items-center h-screen">
            <h1 className="mb-3 text-[3.5em] text-white">Welcome to theBooker! </h1>
            <h2 className="mb-10 text-base text-white text-[1.5em]">Select Two Teams and see what our model returns!</h2>
            <div className="flex space-x-4">
                <div className="max-w-40 w-full">
                    <Dropdown/>
                </div>
                <div className="max-w-40 w-full">
                    <Dropdown/>
                </div>
                <button className="bg-white text-black px-4 py-2 rounded" onClick = {handleClick}>Predict!</button>
            </div>
        </main>
    );
}
