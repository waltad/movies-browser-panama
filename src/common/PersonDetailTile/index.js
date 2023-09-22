import {
  DetailsTile,
  NoImage,
  Content,
  Title,
  Label,
  Info,
  Description,
  Wrapper,
  DetailsLine,
} from "./styled";
import { imagesAPIw400 } from "../../apiURL";
import anonymous from "../../images/Picture.png";

const PersonDetailTile = ({
  poster,
  name,
  birthday,
  birthplace,
  biography,
}) => {
  return (
    <Wrapper>
      <DetailsTile>
        <NoImage
          src={poster ? `${imagesAPIw400}${poster}` : anonymous}
          alt="name"
        />
        <Content>
          <Title>{name}</Title>
          <DetailsLine>
            <Label>Date of birth:</Label>
            <Info>{birthday}</Info>
          </DetailsLine>
          <DetailsLine>
            <Label>Place of birth:</Label>
            <Info>{birthplace}</Info>
          </DetailsLine>
        </Content>
        <Description>{biography}</Description>
      </DetailsTile>
    </Wrapper>
  );
};

export default PersonDetailTile;
