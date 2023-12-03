import {
  PageCounter,
  ButtonText,
  PrevArrowIcon,
  Wrapper,
  PageNumbers,
  Button,
  NextArrowIcon,
} from "./styled";
import { usePagination } from "./usePagination";

export const Pagination = () => {
  const {
    page,
    totalPages,
    setNextPage,
    setPreviousPage,
    setFirstPage,
    setLastPage,
  } = usePagination();
  const isFirstPage = page === 1;
  const isLastPage = page === totalPages;

  return (
    <Wrapper>
      <Button onClick={setFirstPage} disabled={isFirstPage}>
        <PrevArrowIcon isdisabled={isFirstPage.toString()} />
        <PrevArrowIcon ismobile="true" isdisabled={isFirstPage.toString()} />
        <ButtonText>First</ButtonText>
      </Button>
      <Button onClick={setPreviousPage} disabled={isFirstPage}>
        <PrevArrowIcon isdisabled={isFirstPage.toString()} />
        <ButtonText>Previous</ButtonText>
      </Button>
      <PageCounter>
        Page <PageNumbers>{page}</PageNumbers> of{" "}
        <PageNumbers>{totalPages}</PageNumbers>
      </PageCounter>
      <Button onClick={setNextPage} disabled={isLastPage}>
        <ButtonText>Next</ButtonText>
        <NextArrowIcon isdisabled={isLastPage.toString()} />
      </Button>
      <Button onClick={setLastPage} disabled={isLastPage}>
        <ButtonText>Last</ButtonText>
        <NextArrowIcon isdisabled={isLastPage.toString()} />
        <NextArrowIcon ismobile="true" isdisabled={isLastPage.toString()} />
      </Button>
    </Wrapper>
  );
};
