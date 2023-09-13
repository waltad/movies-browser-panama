import { Wrapper } from "../styled";
import { Spinner } from "./styled";

export const LoadingIcon = ({ title }) => (
    <Wrapper>
        {title}
        <Spinner />
    </Wrapper>
);