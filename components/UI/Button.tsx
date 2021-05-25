import styled from "@emotion/styled";
import { Base, BaseProps } from "components/Base";

interface ButtonProps extends BaseProps {}

const Button = styled.button<ButtonProps>`
    font-size: 2.25rem;
    line-height: 2.5rem;
    font-weight: 800;

    color: #fff;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    background-color: ${(props) => props.theme.color.copper};
    border: 4px solid ${(props) => props.theme.color.pink};
    border-radius: 32px;
    padding: 2rem;

    max-width: fit-content;

    cursor: pointer;

    ${Base}
`;

export default Button;
