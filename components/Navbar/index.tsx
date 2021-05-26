import { Divide as Hamburger } from "hamburger-react";
import { useEffect, useState } from "react";
import HamburgerMenuWrapper from "./HamburgerMenu";
import NavbarBrand from "./NavbarBrand";
import NavbarContainer from "./NavbarContainer";
import NavbarLink from "./NavbarLink";
import NavbarLinkMobile from "./NavbarLinkMobile";
import NavBarLinksWrapper from "./NavbarLinksWrapper";
import NavbarLinksWrapperMobile from "./NavbarLinksWrapperMobile";
import NavbarMenu from "./NavbarMenu";
import NavbarWrapper from "./NavbarWrapper";

function Navbar() {
    const [isNavbarMenuOpened, setNavbarMenuOpend] = useState(false);

    useEffect(() => {
        if (isNavbarMenuOpened) {
            document.body.classList.add("menu-opend");
        } else {
            document.body.classList.remove("menu-opend");
        }
    }, [isNavbarMenuOpened]);

    return (
        <NavbarWrapper>
            <NavbarContainer>
                <NavbarBrand>Burgerino</NavbarBrand>
                <HamburgerMenuWrapper>
                    <Hamburger
                        toggled={isNavbarMenuOpened}
                        toggle={setNavbarMenuOpend}
                    />
                </HamburgerMenuWrapper>
                <NavBarLinksWrapper>
                    <NavbarLink
                        to="Menu"
                        spy={true}
                        smooth={true}
                        hashSpy={true}
                    >
                        Menu
                    </NavbarLink>
                    <NavbarLink
                        to="Our chefs"
                        spy={true}
                        smooth={true}
                        hashSpy={true}
                    >
                        Our chefs
                    </NavbarLink>
                </NavBarLinksWrapper>
            </NavbarContainer>
            <NavbarMenu opened={isNavbarMenuOpened}>
                <NavbarLinksWrapperMobile>
                    <NavbarLinkMobile
                        to="Menu"
                        spy={true}
                        smooth={true}
                        hashSpy={true}
                        onClick={() => setNavbarMenuOpend(false)}
                    >
                        Menu
                    </NavbarLinkMobile>
                    <NavbarLinkMobile
                        to="Our chefs"
                        spy={true}
                        smooth={true}
                        hashSpy={true}
                        onClick={() => setNavbarMenuOpend(false)}
                    >
                        Our chefs
                    </NavbarLinkMobile>
                </NavbarLinksWrapperMobile>
            </NavbarMenu>
        </NavbarWrapper>
    );
}

export default Navbar;
