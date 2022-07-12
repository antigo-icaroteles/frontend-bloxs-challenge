import Header from "../../components/Header";
import { useMenu } from "../../providers/menu";
import { NewsContainer } from "./style";

const NewsPage = () => {
  const { menuIsExpanded } = useMenu();
  return (
    <NewsContainer menuIsExpanded={menuIsExpanded}>
      <Header namepage="Notícias" />
    </NewsContainer>
  );
};

export default NewsPage;
