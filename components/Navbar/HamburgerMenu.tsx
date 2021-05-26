import styled from "@emotion/styled";
import { mq } from "components/UI/Responsive";

const HamburgerMenuWrapper = styled.div`
    position: absolute;
    right: 1rem;

    ${mq.md} {
        display: none;
    }
`;

export default HamburgerMenuWrapper;
