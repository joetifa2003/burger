import { Divide as Hamburger } from "hamburger-react";
import HamburgerMenuWrapper from "./HamburgerMenu";
import NavbarBrand from "./NavbarBrand";
import NavbarContainer from "./NavbarContainer";
import NavbarLink from "./NavbarLink";
import NavBarLinksWrapper from "./NavbarLinksWrapper";
import NavbarWrapper from "./NavbarWrapper";

function Navbar() {
    return (
        <NavbarWrapper>
            <NavbarContainer>
                <NavbarBrand>Burgerino</NavbarBrand>
                <HamburgerMenuWrapper>
                    <Hamburger />
                </HamburgerMenuWrapper>
                <NavBarLinksWrapper>
                    <NavbarLink>Home</NavbarLink>
                    <NavbarLink>Menu</NavbarLink>
                    <NavbarLink>Our chiefs</NavbarLink>
                </NavBarLinksWrapper>
            </NavbarContainer>
        </NavbarWrapper>
    );
}

export default Navbar;
