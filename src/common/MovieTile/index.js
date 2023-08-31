import { Description, Poster, Wrapper, Title, Year, Tags, Tag } from "./styled";
import noPoster from "../../images/Movie.png";

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
      
    </Wrapper>
  )
};