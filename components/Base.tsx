import { css, Theme } from "@emotion/react";
import { getResponsiveQuries, Responsive } from "./UI/Responsive";

export interface BaseProps {
    fullWidth?: boolean;
    fullHeight?: boolean;
    screenHeight?: boolean;
    screenWidth?: boolean;
    position?: "relative" | "absoloute" | "sticky";
    bgColor?: keyof Theme["color"];
    color?: keyof Theme["color"];
    zIndex?: number;
    alignItems?: "center";
    justifyItems?: "center";
    justifyContent?: "center";
    marginTop?: Responsive;
    marginY?: string;
    paddingTop?: string;
}

export const Base = (
    props: BaseProps & {
        theme: Theme;
    }
) =>
    css`
        ${props.fullWidth && "width: 100%;"}
        ${props.fullHeight && "height: 100%;"}
        ${props.screenWidth && "width: 100vw;"}
        ${props.screenHeight && "height: 100vh;"}
        ${props.position && `position: ${props.position};`}
        ${props.bgColor &&
        `background-color: ${props.theme.color[props.bgColor]};`}
        ${props.color && `color: ${props.theme.color[props.color]};`}
        ${props.zIndex && `z-index: ${props.zIndex};`}

        ${props.justifyItems && `justify-items: ${props.justifyItems};`}
        ${props.alignItems && `align-items: ${props.alignItems};`}
        ${props.justifyContent && `justify-content: ${props.justifyContent};`}
        ${props.paddingTop && `padding-top: ${props.paddingTop};`}
        ${props.marginTop &&
        getResponsiveQuries(
            props.marginTop,
            (value) => `margin-top: ${value};`
        )}
        ${props.marginY &&
        `
            margin-top: ${props.marginY};
            margin-bottom: ${props.marginY};
        `}
    `;
