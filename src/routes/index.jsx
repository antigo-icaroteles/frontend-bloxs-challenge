import { Routes as RoutesFromRouterDOM, Route } from "react-router-dom";

//IMPORT PAGES
import NewsPage from "../pages/News";
import NotFoundPage from "../pages/NotFound";

const Routes = () => {
  return (
    <RoutesFromRouterDOM>
      <Route path="/" element={<NotFoundPage />} />
      <Route path="/entrepreneur/dashboard" element={<NotFoundPage />} />
      <Route path="/entrepreneur/companies" element={<NotFoundPage />} />
      <Route path="/entrepreneur/projects" element={<NotFoundPage />} />
      <Route path="/entrepreneur/chat" element={<NotFoundPage />} />
      <Route path="/entrepreneur/earnings" element={<NotFoundPage />} />
      <Route path="/entrepreneur/indications" element={<NotFoundPage />} />
      <Route path="/community/forum" element={<NotFoundPage />} />
      <Route path="/community/academy" element={<NotFoundPage />} />
      <Route path="/community/events" element={<NotFoundPage />} />
      <Route path="/community/news" element={<NewsPage />} />
      <Route path="/community/services" element={<NotFoundPage />} />
    </RoutesFromRouterDOM>
  );
};

export default Routes;
