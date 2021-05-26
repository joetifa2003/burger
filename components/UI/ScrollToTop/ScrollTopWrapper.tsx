import styled from "@emotion/styled";

interface ScrollTopWrapperProps {
    visible?: boolean;
}

const ScrollTopWrapper = styled.div<ScrollTopWrapperProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom: 16px;
    right: 16px;
    z-index: 15;
    background-color: ${(props) => props.theme.color.darkGreen};
    width: 64px;
    height: 64px;
    border-radius: 999px;
    transition: all 250ms ease-in-out;

    opacity: ${(props) => (props.visible ? "1" : "0")};

    cursor: pointer;
`;

export default ScrollTopWrapper;
