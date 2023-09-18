import styled from "styled-components";

export const MoviePage = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  row-gap: 40px;
  width: 100%;
  background: ${({ theme }) => theme.colors.whisper};
`;

export const BigPosterWithGradient = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  img {
    width: 71%;
    height: auto;
    object-fit: cover;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(189.44deg, rgba(0, 0, 0, 0) 58.48%, rgba(0, 0, 0, 0.106473) 63.17%, rgba(0, 0, 0, 0.235359) 68.85%, rgba(0, 0, 0, 0.492821) 78.08%,
      rgba(0, 0, 0, 0.740286) 85.86%, #000000 92.87%),
      linear-gradient(270deg, #000000 14.11%, rgba(0, 0, 0, 0.873268) 15.08%, rgba(0, 0, 0, 0.720529) 16.51%, rgba(0, 0, 0, 0.294577) 19.99%, rgba(0, 0, 0, 0.159921) 21.88%, rgba(0, 0, 0, 0) 25.68%),
      linear-gradient(90deg, #000000 13.6%, rgba(0, 0, 0, 0.984059) 14.58%, rgba(0, 0, 0, 0.967732) 15.44%, rgba(0, 0, 0, 0.865569) 16.3%, rgba(0, 0, 0, 0.230315) 22.87%, rgba(0, 0, 0, 0) 26.64%),
      linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0.689555) 4.66%, rgba(0, 0, 0, 0.439033) 9.34%, rgba(0, 0, 0, 0.20628) 15.16%, rgba(0, 0, 0, 0) 24.22%);
    background-clip: content-box;
  }
`;

export const Section = styled.section`
  display:grid;
  width: 71%;
`;

export const MovieSection = styled(Section)`
  display: flex;
  gap: 40px;
  padding: 40px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 12px 0px #BAC7D580;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Poster = styled.img`
  width: 312px;
  height: 464px;
  border-radius: 5px;
`;
export const Title = styled.div`
  font-size: 36px;
  font-weight: 600;
  line-height: 1.2;
  text-align: left;
`;

export const Year = styled.div`
  font-size: 22px;
  font-weight: 400;
  line-height: 1.2;
  text-align: left;
`;

export const ProductionAndRelease = styled.div`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.2;
  text-align: left;
`;

export const StyledText = styled.span`
  color: ${({ theme }) => theme.colors.stormGray};
`;

export const Rating = styled.div`
  display: flex;
  gap: 8px;
  text-align: left;
  align-items: baseline;
`;

export const Value = styled.div`
  font-size: 22px;
  font-weight: 500;
  line-height: 1.3;
`;

export const SmallerText = styled.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.2;
`;

export const Description = styled.div`
  font-size: 20px;
  font-weight: 400;
  line-height: 1.6;
`;

export const MainInfo = styled.div`
  position: absolute;
  bottom: 7%;
  left: 14%;
`;

export const BigTitle = styled.div`
  font-size: 64px;
  font-weight: 600;
  line-height: 1.2;
  text-align: left;
  color: ${({ theme }) => theme.colors.white};
  /* display: grid;
  grid-template-columns: auto;
  gap: 16px; */
`;

export const TopRating = styled.div`
  display: flex;
  gap: 8px;
  height: 40px;
`;

export const TopStar = styled.div`
  width: 40px;
  height: 38px;
  img {
    width: 100%;
  }
`;

export const TopValue = styled.div`
  align-items: baseline;
  font-size: 30px;
  font-weight: 500;
  line-height: 1.3;
  text-align: left;
  color: ${({ theme }) => theme.colors.white};
`;

export const TopSmallerText = styled.span`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.2;
  text-align: left;
`;

export const TopVotes = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.2;
  text-align: left;
  color: ${({ theme }) => theme.colors.white};
  margin-top: 16px;
`;