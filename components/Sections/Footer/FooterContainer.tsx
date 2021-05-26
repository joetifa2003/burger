import styled from "@emotion/styled";
import Container from "components/UI/Container";
import { mq } from "components/UI/Responsive";

const FooterContainer = styled(Container)`
    flex-direction: row;
    justify-content: space-between;
    padding-top: 1rem;
    flex-direction: column;

    ${mq.md} {
        flex-direction: row;
    }
`;

export default FooterContainer;
