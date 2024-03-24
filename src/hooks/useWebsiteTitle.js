import { useEffect } from "react";

function useWebsiteTitle (title) {
    useEffect(() => {
        document.title = title;
    }, [title]);
}

export default useWebsiteTitle;