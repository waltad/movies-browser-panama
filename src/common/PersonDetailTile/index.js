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
        <Title>name</Title>
        <Content>
          <Title>title</Title>
          <Details>
            <DetailsLine>
              <Label>Date of birth:</Label>
              <Info>info</Info>
            </DetailsLine>
            <DetailsLine>
              <Label>Place of birth:</Label>
              <Info>info</Info>
            </DetailsLine>
          </Details>
        </Content>
        <Description>description</Description>
      </DetailsTile>
    </Wrapper>
  );
};

export default PersonDetailTile;
