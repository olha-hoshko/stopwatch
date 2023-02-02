import { useContext, useEffect, useState } from "react";
import { StopwatchContext, StopwatchState, StopwatchTime } from "../StopwatchContext/StopwatchContext";

import styles from "./Buttons.module.css"

const startStopwatch = (props: StopwatchState): StopwatchTime => {
    const { hours, minutes, seconds } = props;
    let newHours = hours, newMinutes = minutes, newSeconds = seconds;
    newSeconds++;
    if (newSeconds === 60) {
        newMinutes++;
        newSeconds = 0;
    }
    if (newMinutes === 60) {
        newHours++;
        newMinutes = 0;
    }
    return { ...props, hours: newHours, seconds: newSeconds, minutes: newMinutes };
};

export const Buttons = () => {
    const context = useContext(StopwatchContext);
    const [running, setRunning] = useState(false);

    useEffect(() => {
        let interval: string | number | NodeJS.Timeout | undefined;
        if (running) {
            interval = setInterval(() => context.setStopwatchTime(startStopwatch(context)), 1000);
        } else if (!running) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [running, context]);

    const startRunning = () => {
        context.setStopwatchTime({ ...context, isRunning: true });
        setRunning(true);
    }

    const stopRunning = () => {
        context.setStopwatchTime({ ...context, isRunning: false });
        setRunning(false);
    }

    return (
        <>
            <button className={`${styles.button} ${running ? styles.start_button_off : styles.start_button}`} onClick={startRunning}>Start</button>
            <button className={`${styles.button} ${styles.stop_button}`} onClick={stopRunning}>Stop</button>
        </>
    );
};