import CardBody from "components/Card/CardBody";
import CardImage from "components/Card/CardImage";
import CardWrapper from "components/Card/CardWrapper";
import Text from "components/UI/Text";

function Chef({ name, imageUrl }: { name: string; imageUrl: string }) {
    return (
        <CardWrapper>
            <CardImage src={imageUrl} />
            <CardBody bgColor="copper" color="white">
                <Text
                    fontFamily="lobster"
                    fontSize={{ xs: "2rem", xl: "2rem" }}
                    lineHeight={{ xs: "2rem", xl: "2rem" }}
                    textAlign="center"
                >
                    {name}
                </Text>
            </CardBody>
        </CardWrapper>
    );
}

export default Chef;
