import {
  PageCounter,
  ButtonText,
  PrevArrowIcon,
  Wrapper,
  PageNumbers,
  Button,
  NextArrowIcon,
} from "./styled";

export const Pagination = () => {
  return (
    <Wrapper>
      <Button>
        <PrevArrowIcon />
        <PrevArrowIcon ismobile="true" />
        <ButtonText>First</ButtonText>
      </Button>
      <Button>
        <PrevArrowIcon />
        <ButtonText>Previous</ButtonText>
      </Button>
      <PageCounter>
        Page <PageNumbers>1</PageNumbers> of <PageNumbers>500</PageNumbers>
      </PageCounter>
      <Button>
        <ButtonText>Next</ButtonText>
        <NextArrowIcon />
      </Button>
      <Button>
        <ButtonText>Last</ButtonText>
        <NextArrowIcon />
        <NextArrowIcon ismobile="true" />
      </Button>
    </Wrapper>
  );
};
