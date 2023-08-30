import { Container, ImageBox, Image, Name, AdditionalInfo } from "./styled";
import anonymous from "../../images/Picture.png";

export const PersonTile = ({ person }, { additionalContent }) => {
    return (
        <Container>
            <ImageBox>
                <Image src={anonymous} alt="" />
            </ImageBox>
            <Name>Person Person</Name> {/*later using person.name */}
            <AdditionalInfo>{additionalContent}</AdditionalInfo>
        </Container>
    );
};