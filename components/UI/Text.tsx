import { Theme } from "@emotion/react";
import styled from "@emotion/styled";
import { Base, BaseProps } from "components/Base";
import { getResponsiveQuries, Responsive } from "./Responsive";

interface TextProps extends BaseProps {
    fontFamily?: keyof Theme["fonts"];
    fontSize?: Responsive;
    lineHeight?: Responsive;
    fontWeight?: Responsive;
    shadow?: boolean;
}

const Text = styled.div<TextProps>`
    ${(props) =>
        props.fontFamily &&
        `
        font-family: ${props.fontFamily};
    `}

    ${(props) =>
        props.fontSize &&
        getResponsiveQuries(props.fontSize, (value) => `font-size: ${value};`)}

    ${(props) =>
        props.lineHeight &&
        getResponsiveQuries(
            props.lineHeight,
            (value) => `line-height: ${value};`
        )}

    ${(props) =>
        props.fontWeight &&
        getResponsiveQuries(
            props.fontWeight,
            (value) => `font-weight: ${value};`
        )}

    ${(props) =>
        props.shadow && `text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);`}

    ${Base}
`;

export default Text;
