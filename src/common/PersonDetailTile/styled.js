import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 16px;
  }
`;

export const DetailsTile = styled.article`
  display: flex;
  padding: 40px;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 40px;
  box-shadow: ${({ theme }) => theme.tileShadow};
  max-width: 1288px;
  margin-top: 56px;
  align-self: center;
`;

export const NoImage = styled.img`
  width: 399px;
  height: 564px;
  margin-right: 40px;
  background-color: ${({ theme }) => theme.colors.silver};
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 212px;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 116px;
    height: auto;
  }
`;

export const Content = styled.div`
  display: flex;
  padding: 8px 0px;
  flex-direction: column;
  align-items: flex-start;
`;

export const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 24px;
  line-height: 120%;
  margin-top: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 24px;
    font-weight: bold;
    line-height: 130%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 14px;
    font-weight: bold;
    line-height: 130%;
  }
`;

export const DetailsLine = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Datails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Label = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.stormGray};
  font-weight: normal;
  line-height: 120%;
  margin: 0 11px 3px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 15px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 12px;
  }
`;

export const Info = styled.p`
  font-size: 18px;
  font-weight: normal;
  color: ${({ theme }) => theme.colors.woodSmoke};
  font-weight: normal;
  line-height: 120%;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 15px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 12px;
  }
`;

export const Description = styled.p`
  font-size: 20px;
  line-height: 1.6;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 12px;
  }
`;
