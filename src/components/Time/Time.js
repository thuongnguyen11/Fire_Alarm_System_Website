import React, { useEffect, useState } from "react";

function Time() {
    const [clockState, setClockState] = useState();
    const [currentDate, setCurrentDate] = useState("");

    useEffect(() => {
        setInterval(() => {
            const date = new Date();
            const today = date.getDate()  + '-' + (date.getMonth() + 1) + '-' + date.getFullYear() ;
            setCurrentDate(today);


            setClockState(date.toLocaleTimeString());
        }, 1000);
    }, []);

    return (
        <div className="text-center font-bold mt-14">
            <h1 className="text-gray-800 text-2xl">Thời gian</h1>
            <div className="text-3xl text-red-500 ">{clockState}</div>
            <div className="text-gray-500">{currentDate}</div>


        </div>
    );
}

export default Time;