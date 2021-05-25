import styled from "@emotion/styled";
import { Base, BaseProps } from "components/Base";
import { mq } from "./Responsive";

interface ContainerProps extends BaseProps {}

const Container = styled.div<ContainerProps>`
    ${Base}

    display: flex;
    flex-direction: column;

    width: 100%;
    min-height: 100%;

    overflow-x: hidden;

    margin-left: auto;
    margin-right: auto;

    ${mq.sm} {
        max-width: 640px;
    }

    ${mq.md} {
        max-width: 768px;
    }
    ${mq.lg} {
        max-width: 1024px;
    }

    ${mq.xl} {
        max-width: 1280px;
    }

    ${mq.xxl} {
        max-width: 1536px;
    }
`;

export default Container;
