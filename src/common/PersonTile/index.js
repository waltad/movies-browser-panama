import { ContainerLink, ImageBox, Image, Name, AdditionalInfo } from "./styled";
import { imagesAPIw200 } from "../../apiURL";
import anonymous from "../../images/Picture.png";

export const PersonTile = ({ name, profile_path, additionalContent, id, role }) => {
  return (
    <ContainerLink to={`/personDetails/?id=${id}`} key={`${id}${role}`}>
      <ImageBox>
        <Image
          src={profile_path ? `${imagesAPIw200}${profile_path}` : anonymous}
          alt="name"
        />
      </ImageBox>
      <Name>{name}</Name>
      <AdditionalInfo>{additionalContent}</AdditionalInfo>
    </ContainerLink>
  );
};
