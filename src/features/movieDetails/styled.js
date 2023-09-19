import styled from "styled-components";

export const MoviePage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 40px;
  width: 100%;
  background: ${({ theme }) => theme.colors.whisper};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    row-gap: 16px;
  }
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

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 85%;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 95%;
  }
`;

export const MovieSection = styled(Section)`
  grid-template-columns: 312px auto;
  grid-template-rows: auto auto;
  gap: 40px;
  padding: 40px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.tileShadow};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 114px auto;
    gap: 16px;
    padding: 16px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-row: 1;
    grid-column: 2;
    gap: 8px;
  }
`;

export const Poster = styled.img`
  grid-row: 1 /3;
  width: 312px;
  height: 464px;
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-row: 1;
    width: 114px;
    height: 169px;
  }
`;

export const Title = styled.div`
  font-size: 36px;
  font-weight: 600;
  line-height: 1.2;
  text-align: left;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.3;
  }
`;

export const Year = styled.div`
  font-size: 22px;
  font-weight: 400;
  line-height: 1.2;
  text-align: left;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 13px;
    color: ${({theme}) => theme.colors.waterloo};
  }
`;

export const ProductionAndRelease = styled.div`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.2;
  text-align: left;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 12px;
    line-height: 2;
  }
`;

export const StyledText = styled.span`
  color: ${({ theme }) => theme.colors.stormGray};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
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

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 13px;
  }
`;

export const Votes = styled.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 13px;
    color: ${({theme}) => theme.colors.waterloo};
  }
`;

export const SmallerText = styled(Votes)`
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

export const Description = styled.div`
  grid-column: 2;
  grid-row: 2;
  font-size: 20px;
  font-weight: 400;
  line-height: 1.6;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-column: 1 / 3;
    font-size: 14px;
  } 
`;

export const MainInfo = styled.div`
  position: absolute;
  bottom: 7%;
  left: 14%;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto auto auto;
  row-gap: 8px;
  column-gap: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    bottom: 3.5%;
    left: 7%;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    bottom: 2.5%;
    left: 2.5%;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
    row-gap: 0;
  }
`;

export const BigTitle = styled.div`
  font-size: 64px;
  font-weight: 600;
  line-height: 1.2;
  text-align: left;
  color: ${({ theme }) => theme.colors.white};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-column: 1 / 3;
    font-size: 24px;
  }
`;

export const TopRating = styled.div`
  margin-top: 8px;
  display: flex;
  gap: 8px;
`;

export const TopStar = styled.div`
  width: 40px;
  height: 38px;
  img {
    width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 16px;
    height: 15px;
  }
`;

export const TopValue = styled.div`
  align-items: baseline;
  font-size: 30px;
  font-weight: 500;
  line-height: 1.3;
  text-align: left;
  color: ${({ theme }) => theme.colors.white};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 14px;
  }
`;

export const TopSmallerText = styled.span`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.2;
  text-align: left;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 10px;
  }
`;

export const TopVotes = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.2;
  text-align: left;
  color: ${({ theme }) => theme.colors.white};
  margin-top: 4px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 10px;
    align-self: flex-end;
  }
`;