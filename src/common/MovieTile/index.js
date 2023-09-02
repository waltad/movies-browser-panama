import { Poster, Wrapper, Title, Year, Genres, Genre, Rating, Star, Value, Votes } from "./styled";
import noPoster from "../../images/Movie.png";
import star from "../../images/Star.png";

export const MovieTitle = () => {
  return (
    <Wrapper>
      <div>
        <Poster src={noPoster} alt="" />

        <div>
          <Title>Mulan long title long title Mulan long title long </Title>
          <Year>2020</Year>
          <Genres>
            <Genre>Action</Genre>
            <Genre>Adventure</Genre>
            <Genre>Drama</Genre>
          </Genres>
        </div>
      </div>

      <Rating>
        <Star src={star} alt="star" />
        <Value>7.8</Value>
        <Votes>35 Votes</Votes>
      </Rating>

    </Wrapper>
  )
};