import {
  DetailsTile,
  NoImage,
  Content,
  Title,
  Details,
  Label,
  Info,
  Description,
  Wrapper,
  DetailsLine,
} from "./styled";
import anonymous from "../../images/Picture.png";

const PersonDetailTile = () => {
  return (
    <Wrapper>
      <DetailsTile>
        <NoImage src={anonymous} alt="name" />
        <Content>
          <Title>Alicja Roza</Title>
          <DetailsLine>
            <Label>Date of birth:</Label>
            <Info>info</Info>
          </DetailsLine>
          <DetailsLine>
            <Label>Place of birth:</Label>
            <Info>info</Info>
          </DetailsLine>
          <Description>
            Liu Yifei was born in Wuhan, Hubei, Province of China on August
            25th, 1987. She began modeling at the age of 8 and was trained in
            singing, dancing and the piano. Moving to the United States at 10
            with her mother, Liu lived there for four years.
          </Description>
        </Content>
      </DetailsTile>
    </Wrapper>
  );
};

export default PersonDetailTile;
