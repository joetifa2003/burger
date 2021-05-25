import styled from "@emotion/styled";
import Container from "components/UI/Container";
import { mq } from "components/UI/Responsive";

const NavbarContainer = styled(Container)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    ${mq.md} {
        justify-content: space-between;
    }
`;

export default NavbarContainer;
