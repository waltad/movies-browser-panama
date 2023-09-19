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

const PersonDetailTile = ({ poster, name }) => {
  return (
    <Wrapper>
      <DetailsTile>
        <NoImage src={poster ? `${imagesAPIw400}${poster}` : anonymous} alt="name" />
        <Content>
          <Title>{name}</Title>
          <DetailsLine>
            <Label>Date of birth:</Label>
            <Info>info</Info>
          </DetailsLine>
          <DetailsLine>
            <Label>Place of birth:</Label>
            <Info>info</Info>
          </DetailsLine>
        </Content>
        <Description>
          Liu Yifei was born in Wuhan, Hubei, Province of China on August 25th,
          1987. She began modeling at the age of 8 and was trained in singing,
          dancing and the piano. Moving to the United States at 10 with her
          mother, Liu lived there for four years.
        </Description>
      </DetailsTile>
    </Wrapper>
  );
};

export default PersonDetailTile;
