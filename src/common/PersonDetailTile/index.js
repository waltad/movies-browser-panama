import {
  DetailsTile,
  NoImage,
  Content,
  Title,
  LabelDate,
  LabelPlace,
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
            <LabelDate>Date of birth:</LabelDate>
            <LabelDate mobile none>Birth:</LabelDate>
            <Info>{new Date(birthday).toLocaleDateString()}</Info>
          </DetailsLine>
          <DetailsLine mobile>
            <LabelPlace>Place of birth:</LabelPlace>
            <Info>{birthplace}</Info>
          </DetailsLine>
        </Content>
        <Description>{biography}</Description>
      </DetailsTile>
    </Wrapper>
  );
};

export default PersonDetailTile;
