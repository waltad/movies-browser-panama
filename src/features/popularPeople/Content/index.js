import { LoadingIcon } from "../../../common/States/Loading";
import { NoResults } from "../../../common/States/NoResults";
import { ErrorMessage } from "../../../common/States/Error";
import PopularPeople from "../PopularPeople";

const Content = ({ status, data, error }) => {
  switch (status) {
    case "initial":
      return null;

    case "loading":
      return <LoadingIcon />;

    case "success":
      return <PopularPeople data={data} />;

      case "noResults":
        return <NoResults />;

    case "error":
      return <ErrorMessage>{error}</ErrorMessage>;

    default:
      throw new Error(`Incorrect status: ${status}`);
  }
};

export default Content;
