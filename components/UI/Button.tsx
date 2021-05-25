import styled from "@emotion/styled";
import { Base, BaseProps } from "components/Base";
import { mq } from "./Responsive";

interface ButtonProps extends BaseProps {}

const Button = styled.button<ButtonProps>`
    font-size: 1.5rem;
    line-height: 1.5rem;
    font-weight: 800;

    width: 100%;

    color: #fff;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    background-color: ${(props) => props.theme.color.copper};
    border: 4px solid ${(props) => props.theme.color.pink};
    border-radius: 32px;
    padding: 1rem;

    cursor: pointer;

    ${mq.md} {
        font-size: 2rem;
        line-height: 2rem;
        padding: 1.5rem;
        max-width: fit-content;
    }

    ${Base}
`;

export default Button;
