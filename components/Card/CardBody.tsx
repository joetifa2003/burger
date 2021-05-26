import styled from "@emotion/styled";
import { Base, BaseProps } from "components/Base";

interface CardBodyProps extends BaseProps {}

const CardBody = styled.div<CardBodyProps>`
    padding: 2rem;
    ${Base}
`;

export default CardBody;
