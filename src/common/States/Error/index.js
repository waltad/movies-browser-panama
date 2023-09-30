import { Wrapper } from "../styled";
import { Button, ErrorIcon, Heading, Subheading } from "./styled";

export const ErrorMessage = () => (
  <Wrapper>
    <ErrorIcon />
    <Heading>Ooops! Something went wrong...</Heading>
    <Subheading>Please check your network connection and try again</Subheading>
    <Button to="/movies">Back to home page</Button>
  </Wrapper>
);
