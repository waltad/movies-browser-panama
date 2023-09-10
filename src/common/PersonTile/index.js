import { Container, ImageBox, Image, Name, AdditionalInfo } from "./styled";
import { imagesAPIw200 } from "../../apiURL";
import anonymous from "../../images/Picture.png";

export const PersonTile = (name, profile_path, role, id) => {
  return (
    <Container>
      <ImageBox>
        <Image src={profile_path ? `${imagesAPIw200}${profile_path}` : anonymous} alt="name" />
      </ImageBox>
      <Name>Name Surname{}</Name> {/*later using person.name */}
      <AdditionalInfo>{role ? role : null}</AdditionalInfo>
    </Container>
  );
};
