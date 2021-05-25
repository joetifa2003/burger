import styled from "@emotion/styled";
import { mq } from "components/UI/Responsive";

const HamburgerMenuWrapper = styled.div`
    position: absolute;
    right: 0;

    ${mq.md} {
        display: none;
    }
`;

export default HamburgerMenuWrapper;
