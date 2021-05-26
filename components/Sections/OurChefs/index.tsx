import { css } from "@emotion/react";
import Chef from "components/Chef";
import Col from "components/UI/Col";
import Container from "components/UI/Container";
import Grid from "components/UI/Grid";
import Header from "components/UI/Header";
import { mq } from "components/UI/Responsive";
import Section from "components/UI/Section";

function OurChefs() {
    return (
        <Section bgColor="nescafe" position="relative">
            <Header>Our Chefs</Header>
            <Container>
                <Grid columns="repeat(auto-fit, minmax(250px, 1fr))">
                    <Col>
                        <Chef
                            name="Hugh King"
                            imageUrl="/images/chefs/Chef1.png"
                        />
                    </Col>
                    <Col>
                        <Chef
                            name="Mack Fields"
                            imageUrl="/images/chefs/Chef2.png"
                        />
                    </Col>
                    <Col>
                        <Chef
                            name="Ted Duncan"
                            imageUrl="/images/chefs/Chef3.png"
                        />
                    </Col>
                    <Col>
                        <Chef
                            name="Hector Butler"
                            imageUrl="/images/chefs/Chef4.png"
                        />
                    </Col>
                </Grid>
            </Container>
            <img
                src="/images/Blob4.svg"
                alt=""
                css={css`
                    position: absolute;
                    top: 0;
                    left: 0;
                    z-index: 0;

                    ${mq.xl} {
                        height: 100%;
                    }
                `}
            />
            <img
                src="/images/Blob5.svg"
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

export default OurChefs;
