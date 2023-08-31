import { Description, Poster, Wrapper, Title, Year, Tags, Tag } from "./styled";
import noPoster from "../../images/Movie.png";

export const MovieTitle = () => {
  return (
    <Wrapper>
      <Poster>
      </Poster>
      <Description>
        <Title>Mulan</Title>
        <Year>2020</Year>
        <Tags>
          <Tag>adventure</Tag>
        </Tags>
      </Description>
    </Wrapper>
  )
};