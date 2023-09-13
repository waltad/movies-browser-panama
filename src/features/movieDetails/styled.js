import styled from "styled-components";

export const MoviePage = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
  width: 100%;
  background: ${({ theme }) => theme.colors.whisper};
`;

export const BigPoster = styled.img`
  width: 100%;
  height: auto;
  background: linear-gradient(189.44deg, rgba(0, 0, 0, 0) 58.48%, rgba(0, 0, 0, 0.106473) 63.17%, rgba(0, 0, 0, 0.235359) 68.85%, rgba(0, 0, 0, 0.492821) 78.08%, rgba(0, 0, 0, 0.740286) 85.86%, #000000 92.87%),
    linear-gradient(90deg, #000000 13.6%, rgba(0, 0, 0, 0.984059) 14.58%, rgba(0, 0, 0, 0.967732) 15.44%, rgba(0, 0, 0, 0.865569) 16.3%, rgba(0, 0, 0, 0.230315) 22.87%, rgba(0, 0, 0, 0) 26.64%),
    linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0.689555) 4.66%, rgba(0, 0, 0, 0.439033) 9.34%, rgba(0, 0, 0, 0.20628) 15.16%, rgba(0, 0, 0, 0) 24.22%),
    linear-gradient(270deg, #000000 14.11%, rgba(0, 0, 0, 0.873268) 15.08%, rgba(0, 0, 0, 0.720529) 16.51%, rgba(0, 0, 0, 0.294577) 19.99%, rgba(0, 0, 0, 0.159921) 21.88%, rgba(0, 0, 0, 0) 25.68%);
`;

export const Section = styled.section`
  width: 71%;
`;

export const MovieSection = styled(Section)`
  padding: 40px;
  background-color: ${({theme}) => theme.colors.white};
`;

/* Content */

// position: absolute;
// width: 1368px;
// height: 1863px;
// left: 276px;
// top: 927px;
