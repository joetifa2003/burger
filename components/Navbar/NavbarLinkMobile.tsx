import styled from "@emotion/styled";
import { Link } from "react-scroll";

const NavbarLinkMobile = styled(Link)`
    font-size: 1.5rem;
    line-height: 1.5rem;
    font-weight: bold;
    cursor: pointer;

    :hover {
        color: ${(props) => props.theme.color.copper};
    }

    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
`;

export default NavbarLinkMobile;
