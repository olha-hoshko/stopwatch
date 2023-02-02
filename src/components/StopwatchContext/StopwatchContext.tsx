import { createContext } from "react";

type StopwatchTime = {
    seconds: number,
    minutes: number,
    hours: number,
    isRunning: boolean,
};

const defaultStopwatchTime: StopwatchTime = {
    seconds: 0,
    minutes: 0,
    hours: 0,
    isRunning: false,
};

type StopwatchState = StopwatchTime & {
    setStopwatchTime: (time: StopwatchTime) => void;
};

const StopwatchContext = createContext<StopwatchState>({ ...defaultStopwatchTime, setStopwatchTime: () => { } });

export { StopwatchContext };
export type { StopwatchState, StopwatchTime };

