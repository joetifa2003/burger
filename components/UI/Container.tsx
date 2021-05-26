import styled from "@emotion/styled";
import { Base, BaseProps } from "components/Base";
import { mq } from "./Responsive";

interface ContainerProps extends BaseProps {}

const Container = styled.div<ContainerProps>`
    ${Base}

    display: flex;
    flex-direction: column;

    width: calc(100% - 2rem);
    min-height: 100%;

    overflow-x: hidden;

    margin-left: auto;
    margin-right: auto;

    padding-left: 1rem;
    padding-right: 1rem;
    padding-bottom: 1rem;

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
