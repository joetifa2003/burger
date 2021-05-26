import styled from "@emotion/styled";
import { Base, BaseProps } from "../Base";
import { getResponsiveQuries, Responsive } from "./Responsive";

interface GridProps extends BaseProps {
    columns?: Responsive;
    gap?: string;
}

const Grid = styled.div<GridProps>`
    ${Base}

    display: grid;
    grid-auto-columns: auto;
    gap: ${(props) => props.gap || "2rem"};

    > * {
        z-index: 1;
    }

    ${(props) =>
        props.columns &&
        getResponsiveQuries(
            props.columns,
            (value) => `grid-template-columns: ${value};`
        )}
`;

export default Grid;
