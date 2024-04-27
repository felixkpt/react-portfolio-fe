import { useEffect, useState } from "react";
import { subscribe, unsubscribe } from "../utils/events";

interface EventType {
    elementId: string
    results: object
}

const useAutoPostDone = () => {

    const [event, setEvent] = useState<EventType>()

    useEffect(() => {

        subscribe('autoPostDone', handleAutoPostDone);

        return () => {
            unsubscribe('autoPostDone', handleAutoPostDone);
        };

    }, [])

    const handleAutoPostDone = (resp: any) => {
        if (resp.detail) {
            const { elementId, results } = resp.detail;
            setEvent({ elementId, results })
        }
    };

    return { event }
}

export default useAutoPostDone