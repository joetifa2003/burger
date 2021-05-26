import { css } from "@emotion/react";
import Card from "components/Card";
import Col from "components/UI/Col";
import Container from "components/UI/Container";
import Grid from "components/UI/Grid";
import Header from "components/UI/Header";
import Section from "components/UI/Section";

function Menu() {
    return (
        <Section fullScreen bgColor="darkGray" position="relative">
            <Header>Menu</Header>
            <Container>
                <Grid columns={{ xs: "1fr", md: "6fr 6fr", lg: "4fr 4fr 4fr" }}>
                    <Col>
                        <Card
                            title="Burger 1"
                            imageUrl="/images/burgers/Burger1.png"
                        />
                    </Col>
                    <Col>
                        <Card
                            title="Burger 2"
                            imageUrl="/images/burgers/Burger2.png"
                        />
                    </Col>
                    <Col>
                        <Card
                            title="Burger 3"
                            imageUrl="/images/burgers/Burger3.png"
                        />
                    </Col>
                </Grid>
            </Container>
            <img
                src="/images/Blob3.svg"
                alt=""
                css={css`
                    position: absolute;
                    top: 0;
                    left: 0;
                    z-index: 0;
                `}
            />
            <img
                src="/images/Blob2.svg"
                alt=""
                css={css`
                    position: absolute;
                    bottom: 0;
                    right: 0;
                    z-index: 0;
                `}
            />
        </Section>
    );
}

export default Menu;
