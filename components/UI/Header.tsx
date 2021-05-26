import styled from "@emotion/styled";
import { mq } from "./Responsive";
import Text from "./Text";

const HeaderWrapper = styled.div`
    display: flex;
    width: 100%;
    margin-top: 3rem;
    margin-bottom: 3rem;
    margin-left: auto;
    margin-right: auto;
    overflow: hidden;
`;

const HeaderContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    width: 100%;
    margin-left: -1rem;
    margin-right: -1rem;

    align-items: center;

    > * {
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;

const LineWrapper = styled.div`
    flex: 1;

    ${mq.md} {
        flex: none;
    }
`;

const Line = styled.div`
    width: 100%;
    height: 0.5rem;

    ${mq.md} {
        width: 6rem;
    }

    background-color: ${(props) => props.theme.color.copper};
`;

function Header({ children }: { children: any }) {
    return (
        <HeaderWrapper>
            <HeaderContainer>
                <LineWrapper>
                    <Line />
                </LineWrapper>
                <div>
                    <Text
                        fontFamily="lobster"
                        fontSize={{ xs: "6rem" }}
                        lineHeight={{ xs: "6rem" }}
                        color="white"
                    >
                        {children}
                    </Text>
                </div>
                <LineWrapper>
                    <Line />
                </LineWrapper>
            </HeaderContainer>
        </HeaderWrapper>
    );
}

export default Header;
