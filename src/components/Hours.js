import React, { useEffect, useState } from "react";

const Hours = () => {
    const shelterHours = [
        { day: "Monday", open: "10:00", close: "16:00" },
        { day: "Tuesday", open: "10:00", close: "16:00" },
        { day: "Wednesday", open: "10:00", close: "16:00" },
        { day: "Thursday", open: "10:00", close: "16:00" },
        { day: "Friday", open: "10:00", close: "16:00" },
        { day: "Saturday", open: "9:00", close: "20:00" },
        { day: "Sunday", open: "9:00", close: "20:00" },
    ];

    const [currentTime, setCurrentTime] = useState({
        currentHour: '',
        currentMinute: '',
        currentSecond: ''
    });

    useEffect(() => {
        const updateCurrentTime = () => {
            const currentDate = new Date();
            setCurrentTime({
                currentHour: currentDate.getHours().toString().padStart(2, '0'),
                currentMinute: currentDate.getMinutes().toString().padStart(2, '0'),
                currentSecond: currentDate.getSeconds().toString().padStart(2, '0')
            });
        };

        updateCurrentTime();
        const intervalId = setInterval(updateCurrentTime, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });
    const currentHours = shelterHours.find(day => day.day === today);

    return (
        <div>
            <h2>Today's Hours</h2>
            <p>
                {currentHours.day}: {currentHours.open} - {currentHours.close}
            </p>
            
            <p>
                Current Time: {currentTime.currentHour}:{currentTime.currentMinute}:{currentTime.currentSecond}
            </p>
        </div>
    );
};

export default Hours;
