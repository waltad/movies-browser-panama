import { Wrapper } from "../styled";
import { Button, ErrorIcon, Heading, Paragraph, Subheading } from "./styled";

export const ErrorMessage = () => (
    <Wrapper>
        <ErrorIcon />
        <Heading>Ooops! Something went wrong...</Heading>
        <Paragraph>
            <Subheading>Please check your network connection and try again</Subheading>
        </Paragraph>
        <Button>Back to home page</Button>
    </Wrapper>
);