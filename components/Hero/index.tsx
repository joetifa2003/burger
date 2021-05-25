import { css } from "@emotion/react";
import Button from "components/UI/Button";
import Col from "components/UI/Col";
import Container from "components/UI/Container";
import Grid from "components/UI/Grid";
import Section from "components/UI/Section";
import Text from "components/UI/Text";
import HeroImage from "./HeroImage";
import SideDiv from "./SideDiv";

function Hero() {
    return (
        <Section
            fullscreen
            position="relative"
            bgColor="nescafe"
            justifyContent="center"
        >
            <SideDiv />
            <Container paddingTop="80px">
                <Grid
                    columns={{
                        xs: "1fr",
                        lg: "6fr 6fr",
                    }}
                    alignItems="center"
                    marginY="auto"
                >
                    <Col>
                        <HeroImage
                            src="/images/Hero.png"
                            width={1000}
                            height={1000}
                        />
                    </Col>
                    <Col>
                        <Text
                            as="h1"
                            color="white"
                            bgColor="copperOverlay"
                            fontSize={{
                                xs: "2.5rem",
                                md: "3.5rem",
                                xl: "4rem",
                            }}
                            lineHeight={{
                                xs: "3.5rem",
                                md: "4rem",
                                xl: "5rem",
                            }}
                            fontWeight="bold"
                            shadow
                        >
                            The best burgers you will ever find.
                        </Text>
                        <Text
                            as="p"
                            color="darkGreen"
                            fontSize={{
                                xs: "2.5rem",
                                md: "3rem",
                            }}
                            lineHeight={{
                                lg: "3rem",
                            }}
                            fontWeight="bold"
                            marginTop="1.5rem"
                        >
                            Fresh & Delicious
                        </Text>
                        <Button
                            marginTop={{
                                xs: "2rem",
                                lg: "4rem",
                            }}
                        >
                            Learn more
                        </Button>
                        <img
                            css={css`
                                position: absolute;
                                bottom: 0;
                                right: 0;
                                z-index: 0;
                            `}
                            src="/images/Blob.svg"
                        />
                    </Col>
                </Grid>
            </Container>
        </Section>
    );
}

export default Hero;
