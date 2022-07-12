import Header from "../../components/Header";
import { useMenu } from "../../providers/menu";
import { NotFoundContainer } from "./style";

const NotFoundPage = ({ namepage }) => {
  const { menuIsExpanded } = useMenu();
  return (
    <NotFoundContainer menuIsExpanded={menuIsExpanded}>
      <Header namepage={namepage} />
    </NotFoundContainer>
  );
};

export default NotFoundPage;
