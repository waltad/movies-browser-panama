import { Description, Poster, Wrapper, Title, Year, Tags, Tag, Rating, Star, Value, Votes } from "./styled";
import noPoster from "../../images/Movie.png";
import star from "../../images/Star.png";

export const MovieTitle = () => {
  return (
    <Wrapper>
      <Poster src={noPoster} alt="" />
      <Description>
        <Title>Mulan long title long title Mulan long title long</Title>
        <Year>2020</Year>
        <Tags>
          <Tag>Action</Tag>
          <Tag>Adventure</Tag>
          <Tag>Drama</Tag>
        </Tags>
      </Description>
      <Rating>
        <Star src={star} alt="star"/>
        <Value>7.8</Value>
        <Votes>35 Votes</Votes>
      </Rating>
    </Wrapper>
  )
};