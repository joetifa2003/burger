import styled from "@emotion/styled";

const HeroSub = styled.div`
    font-size: 3rem;
    line-height: 3rem;
    font-weight: bold;

    margin-top: 1.5rem;

    color: ${(props) => props.theme.color.darkGreen};
    text-shadow: 0px 4px 9px rgba(0, 0, 0, 0.25);
`;

export default HeroSub;
