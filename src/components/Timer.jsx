import { useState, useEffect } from "react";
import "./Timer.css";

const Timer = () => {
    const [secondsUnit, setSecondsUnit] = useState(0);
    const [secondsTenth, setSecondsTenth] = useState(3);
    const [dangerZone, setDangerZone] = useState("");
    const [done, setDone] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setDone(true);
        }, 31000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (!secondsUnit && !secondsTenth) {
            return;
        }

        if (secondsTenth === 1 && secondsUnit < 5 && secondsUnit > 0) {
            setDangerZone("warning");
        }

        if (!secondsTenth && secondsUnit < 5) {
            setDangerZone("critic");
        }

        const interval = setInterval(() => {
            if (!secondsUnit) {
                if (!secondsTenth) {
                    return () => clearInterval(interval);
                }

                setSecondsTenth((prevState) => prevState - 1);
                setSecondsUnit(9);
                return;
            }

            setSecondsUnit((prevState) => prevState - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [secondsUnit, secondsTenth]);

    return (
        <div className="flex flex-column align-center">
            <div className="container flex gap-min">
                <div className={`unit ${dangerZone}`}>
                    <div
                        className="number-container flex flex-column align-center"
                        style={{
                            transform: `translate(-50%, calc(70px * ${secondsTenth}))`
                        }}
                    >
                        <span>6</span>
                        <span>5</span>
                        <span>4</span>
                        <span>3</span>
                        <span>2</span>
                        <span>1</span>
                        <span>0</span>
                    </div>
                </div>
                <div className={`unit ${dangerZone}`}>
                    <div
                        className="number-container flex flex-column align-center"
                        style={{
                            transform: `translate(-50%, calc(72px * ${secondsUnit}))`
                        }}
                    >
                        <span>9</span>
                        <span>8</span>
                        <span>7</span>
                        <span>6</span>
                        <span>5</span>
                        <span>4</span>
                        <span>3</span>
                        <span>2</span>
                        <span>1</span>
                        <span>0</span>
                    </div>
                </div>
            </div>
            {done && (
                <>
                    <h1 className="lost top"> You Loose ! </h1>
                    <h1 className="lost bottom"> You Loose ! </h1>
                </>
            )}
        </div>
    );
};

export default Timer;
