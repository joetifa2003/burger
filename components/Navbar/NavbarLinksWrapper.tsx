import styled from "@emotion/styled";
import { mq } from "components/UI/Responsive";

const NavBarLinksWrapper = styled.div`
    display: none;
    margin-left: -1rem;
    margin-right: -1rem;

    ${mq.md} {
        display: flex;
    }
`;

export default NavBarLinksWrapper;
