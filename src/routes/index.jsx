import { Routes as RoutesFromRouterDOM, Route } from "react-router-dom";

//IMPORT PAGES
import NewsPage from "../pages/News";
import NotFoundPage from "../pages/NotFound";

const Routes = () => {
  return (
    <RoutesFromRouterDOM>
      <Route path="/" element={<NotFoundPage namepage="Home" />} />
      <Route
        path="/entrepreneur/dashboard"
        element={<NotFoundPage namepage="Dashboard" />}
      />
      <Route
        path="/entrepreneur/companies"
        element={<NotFoundPage namepage="Empresas" />}
      />
      <Route
        path="/entrepreneur/projects"
        element={<NotFoundPage namepage="Projetos" />}
      />
      <Route
        path="/entrepreneur/chat"
        element={<NotFoundPage namepage="Chat" />}
      />
      <Route
        path="/entrepreneur/earnings"
        element={<NotFoundPage namepage="Proventos" />}
      />
      <Route
        path="/entrepreneur/indications"
        element={<NotFoundPage namepage="Indicações" />}
      />
      <Route
        path="/community/forum"
        element={<NotFoundPage namepage="Fórum" />}
      />
      <Route
        path="/community/academy"
        element={<NotFoundPage namepage="Academy" />}
      />
      <Route
        path="/community/events"
        element={<NotFoundPage namepage="Eventos" />}
      />
      <Route path="/community/news" element={<NewsPage />} />
      <Route
        path="/community/services"
        element={<NotFoundPage namepage="Serviços" />}
      />
    </RoutesFromRouterDOM>
  );
};

export default Routes;
