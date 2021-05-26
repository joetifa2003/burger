import { css } from "@emotion/react";
import NavbarBrand from "components/Navbar/NavbarBrand";
import { mq } from "components/UI/Responsive";
import Text from "components/UI/Text";
import FooterContainer from "./FooterContainer";
import FooterWrapper from "./FooterWrapper";

function Footer() {
    return (
        <FooterWrapper>
            <FooterContainer>
                <div
                    css={css`
                        max-width: 352px;
                    `}
                >
                    <NavbarBrand>Burgerino</NavbarBrand>
                    <Text
                        color="white"
                        fontWeight="600"
                        fontSize={{ xs: "1rem" }}
                        lineHeight={{ xs: "2rem" }}
                        marginTop="2rem"
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        ut aliquam
                    </Text>
                    <Text marginTop="2rem" color="white" fontWeight="bold">
                        Designed by: Youssef Ahmed
                    </Text>
                </div>
                <div
                    css={css`
                        display: flex;
                    `}
                ></div>
            </FooterContainer>
            <img
                src="/images/FooterBlob.svg"
                css={css`
                    display: none;
                    position: absolute;
                    top: 0;
                    left: 0;
                    z-index: 0;

                    ${mq.md} {
                        display: block;
                    }
                `}
            />
        </FooterWrapper>
    );
}

export default Footer;
