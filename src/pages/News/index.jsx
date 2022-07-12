import Category from "../../components/Category";
import Header from "../../components/Header";
import { useMenu } from "../../providers/menu";
import { NewsContainer } from "./style";

const NewsPage = () => {
  const { menuIsExpanded } = useMenu();

  return (
    <NewsContainer menuIsExpanded={menuIsExpanded}>
      <Header namepage="Notícias" />

      <main id="main" className="main">
        <Category name="energy" />
        <Category name="agribusiness" />
      </main>
    </NewsContainer>
  );
};

export default NewsPage;
