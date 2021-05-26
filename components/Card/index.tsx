import Text from "components/UI/Text";
import CardBody from "./CardBody";
import CardImage from "./CardImage";
import CardWrapper from "./CardWrapper";

function Card({ title, imageUrl }: { title: string; imageUrl: string }) {
    return (
        <CardWrapper>
            <CardImage src={imageUrl} loading="lazy" />
            <CardBody bgColor="copper" color="white">
                <Text
                    fontSize={{ xs: "3rem" }}
                    lineHeight={{ xs: "3rem" }}
                    fontWeight="bold"
                >
                    {title}
                </Text>
                <Text
                    fontSize={{ xs: "1.5rem" }}
                    lineHeight={{ xs: "1.5rem" }}
                    fontWeight="600"
                    color="nescafe"
                    marginTop="1rem"
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                    aliquam
                </Text>
            </CardBody>
        </CardWrapper>
    );
}

export default Card;
