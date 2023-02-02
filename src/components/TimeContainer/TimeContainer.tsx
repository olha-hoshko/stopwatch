import { useContext, useEffect, useState } from "react";
import { StopwatchContext, StopwatchTime } from "../StopwatchContext/StopwatchContext";

import styles from "./TimeContainer.module.css"

const checkTime = (time: StopwatchTime): string => {
    return `${time.hours < 10 ? `0${time.hours}` : time.hours}:
      ${time.minutes < 10 ? `0${time.minutes}` : time.minutes}:
      ${time.seconds < 10 ? `0${time.seconds}` : time.seconds}`;
}

export const TimeContainer = () => {
    const { hours, minutes, seconds, isRunning, setStopwatchTime } = useContext(StopwatchContext);
    const [timeArray, setTimeArray] = useState<StopwatchTime[]>([]);
    useEffect(() => {
        if (!isRunning && (hours || minutes || seconds)) {
            setTimeArray(prevArray => [...prevArray, { hours, minutes, seconds, isRunning }]);
            setStopwatchTime({ hours: 0, minutes: 0, seconds: 0, isRunning: false });
        }
    }, [hours, minutes, seconds, isRunning, setStopwatchTime]);

    return (
        <div className={styles.saved_time_container}>
            {
                timeArray.map((time, index) => {
                    const timeString = checkTime(time);
                    return <p className={styles.saved_time} id={`${index}`} key={index}>{timeString}</p>
                })
            }
        </div>
    );
}