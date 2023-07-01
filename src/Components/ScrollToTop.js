import { useLocation } from "react-router-dom";
import { useEffect } from "react";

// This component ensures the user is brought to the top of the page when navigating the site

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

export default ScrollToTop