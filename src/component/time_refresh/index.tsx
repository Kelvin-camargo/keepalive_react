import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import  './index.scss';

export default function Time_refresh() {

    const [time, setTime] = useState<number>(60);
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            setTime(time - 1);
            if (time == 0) navigate('');
        }, 1000);
    }, [time]);

    return (
        <div className="time">
        <div className="Time_refresh">
            {time}
        </div>
            <p>second</p>
        </div>
    )
}