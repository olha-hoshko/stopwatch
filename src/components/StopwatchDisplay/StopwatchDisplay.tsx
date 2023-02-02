import { useContext } from "react";
import { StopwatchContext } from "../StopwatchContext/StopwatchContext";

import styles from "./StopwatchDisplay.module.css"

export const StopwatchDisplay = () => {
    const { hours, minutes, seconds } = useContext(StopwatchContext);
    return (
        <div className={styles.time_cell_container}>
            <div className={`${styles.time_cell} ${styles.time_cell_hours} ${styles.time_font}`}>{hours < 10 ? `0${hours}` : hours}</div>
            <span className={styles.time_font}>:</span>
            <div className={`${styles.time_cell} ${styles.time_cell_minutes} ${styles.time_font}`}>{minutes < 10 ? `0${minutes}` : minutes}</div>
            <span className={styles.time_font}>:</span>
            <div className={`${styles.time_cell} ${styles.time_cell_seconds} ${styles.time_font}`}>{seconds < 10 ? `0${seconds}` : seconds}</div>
        </div>
    );
}