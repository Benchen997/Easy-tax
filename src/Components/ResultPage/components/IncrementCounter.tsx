import {useEffect, useState} from "react";

interface IncrementCounterProps {
    target: number;
}

export default function IncrementCounter({ target }: IncrementCounterProps) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(0); // Reset count when target changes

        const increment = target / 100;

        const updateCounter = () => {
            setCount((prevCount) => {
                const newCount = prevCount + increment;
                if (newCount < target) {
                    return newCount;
                } else {
                    return target;
                }
            });
        };

        const interval = setInterval(updateCounter, 30);

        return () => clearInterval(interval);
    }, [target]);

    return (
        <p className="inline-block text-pink-700 text-2xl">{Math.floor(count)}</p>
    );
}

