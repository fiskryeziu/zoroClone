import { useState, useEffect } from "react";

function useScrollTooltip() {
    const [top, setTop] = useState("");
    const [active, setActive] = useState(false)

    const handleScroll = () => {
        const card = document.querySelector(".card.active");
        const screenHeight = window.innerHeight;
        const cardRect = card.getBoundingClientRect();
        const cardMidpoint = cardRect.top + cardRect.height / 2;
        const screenMidpoint = screenHeight / 2;

        console.log(cardMidpoint, screenMidpoint);
        if (cardMidpoint < screenMidpoint + 50) {
            setTop("150px");
            console.log('hello');
        }
        if (cardMidpoint > screenMidpoint - 50) {
            setTop("-150px");
            console.log('hello');
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return { top, active, setActive };
}

export default useScrollTooltip;
