import Header from "../../components/Header";
import { useMenu } from "../../providers/menu";
import { NotFoundContainer } from "./style";

const NotFoundPage = ({ namepage }) => {
  const { menuIsExpanded } = useMenu();
  return (
    <NotFoundContainer menuIsExpanded={menuIsExpanded}>
      <Header namepage={namepage} />

      <main className="main">
        <h2 className="main--title">Essa página ainda não existe!</h2>
      </main>
    </NotFoundContainer>
  );
};

export default NotFoundPage;
