import styled from "@emotion/styled";
import { Link } from "react-scroll";

const NavbarLink = styled(Link)`
    font-size: 1.5rem;
    line-height: 1.5rem;
    font-weight: bold;
    cursor: pointer;

    :hover {
        color: ${(props) => props.theme.color.copper};
    }

    padding-left: 1rem;
    padding-right: 1rem;
`;

export default NavbarLink;
