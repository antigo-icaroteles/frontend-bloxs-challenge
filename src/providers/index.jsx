import { MenuProvider } from "./menu";

const Providers = ({ children }) => {
  return <MenuProvider>{children}</MenuProvider>;
};

export default Providers;
