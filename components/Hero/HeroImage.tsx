import styled from "@emotion/styled";
import { BaseProps } from "components/Base";
import Image from "next/image";

interface HeroImageProps extends BaseProps {}

const HeroImage = styled(Image)<HeroImageProps>`
    width: 100%;
    height: auto;
`;

export default HeroImage;
