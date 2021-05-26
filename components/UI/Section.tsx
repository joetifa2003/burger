import styled from "@emotion/styled";
import { Base, BaseProps } from "components/Base";

interface SectionProps extends BaseProps {
    fullScreen?: boolean;
    bgColor?: "copper" | "nescafe" | "pink" | "darkGreen" | "darkGray";
}

const Section = styled.section<SectionProps>`
    ${Base}

    display: flex;
    flex-direction: column;
    overflow: hidden;

    ${(props) => props.fullScreen && "min-height: calc(100vh);"}
`;

export default Section;
