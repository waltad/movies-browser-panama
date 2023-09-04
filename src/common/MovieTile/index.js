import {
  Poster,
  MainInfo,
  Wrapper,
  Title,
  Year,
  Genres,
  Genre,
  Rating,
  Star,
  Value,
  Votes,
} from "./styled";
import noPoster from "../../images/Movie.png";
import star from "../../images/Star.png";

export const MovieTitle = () => {
  return (
    <Wrapper>
      <Poster src={noPoster} alt="" />

      <MainInfo>
        <Title>Mulan longer tite longer </Title>
        <Year>2020</Year>
        <Genres>
          <Genre>Action</Genre>
          <Genre>Adventure</Genre>
          <Genre>Drama</Genre>
        </Genres>
      </MainInfo>

      <Rating>
        <Star src={star} alt="star" />
        <Value>7.8</Value>
        <Votes>35 Votes</Votes>
      </Rating>
    </Wrapper>
  );
};
