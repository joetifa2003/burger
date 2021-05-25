import styled from "@emotion/styled";
import { Base, BaseProps } from "components/Base";

export interface ColProps extends BaseProps {}

const Col = styled.div<ColProps>`
    width: 100%;
    display: flex;
    flex-direction: column;

    ${Base}
`;

export default Col;
