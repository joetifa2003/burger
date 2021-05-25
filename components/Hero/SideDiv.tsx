import styled from "@emotion/styled";
import { mq } from "components/UI/Responsive";

const SideDiv = styled.div`
    display: none;
    width: 30vw;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${(props) => props.theme.color.copper};
    box-shadow: inset 0px 80px 0px rgba(0, 0, 0, 0.25);

    ${mq.lg} {
        display: block;
    }
`;

export default SideDiv;
