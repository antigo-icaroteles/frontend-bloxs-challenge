import Header from "../../components/Header";
import { NotFoundContainer } from "./style";

const NotFoundPage = ({ namepage }) => {
  return (
    <NotFoundContainer>
      <Header namepage={namepage} />
    </NotFoundContainer>
  );
};

export default NotFoundPage;
