import { useEffect } from "react";

function useWebsiteTitle (title) {
    const setTitle = newTitle => {
        document.title = newTitle;
    }
    useEffect(() => {
        // it is important to use if statemet to avoid 'undefined' result. 
        if (title) {
            setTitle(title)
        }
    }, [title]);

    return setTitle;
}

export default useWebsiteTitle;