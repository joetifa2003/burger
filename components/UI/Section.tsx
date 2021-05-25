import styled from "@emotion/styled";
import { Base, BaseProps } from "components/Base";

interface SectionProps extends BaseProps {
    fullscreen?: boolean;
    bgColor?: "copper" | "nescafe" | "pink" | "darkGreen" | "darkGray";
}

const Section = styled.section<SectionProps>`
    ${Base}

    display: flex;
    flex-direction: column;

    ${(props) => props.fullscreen && "min-height: calc(100vh);"}
`;

export default Section;
