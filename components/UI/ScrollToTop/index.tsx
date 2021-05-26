import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { animateScroll } from "react-scroll";
import ScrollTopWrapper from "./ScrollTopWrapper";

function ScrollToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        document.addEventListener("scroll", (e) => {
            if (window.scrollY > 150) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        });
    }, []);

    return (
        <ScrollTopWrapper
            visible={visible}
            onClick={() => {
                animateScroll.scrollToTop();
            }}
        >
            <FaArrowUp size="24px" color="#fff" />
        </ScrollTopWrapper>
    );
}

export default ScrollToTop;
