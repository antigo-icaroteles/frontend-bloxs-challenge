import { HeaderContainer } from "./style";

import { FaBell, FaUser } from "react-icons/fa";
import { FiHelpCircle, FiMenu } from "react-icons/fi";

const Header = ({ namepage }) => {
  return (
    <HeaderContainer role="header">
      <button type="button" className="header--button header--button__hamb">
        <FiMenu size="1.3rem" />
      </button>
      <h1 className="header--namepage">{namepage}</h1>
      <div className="header--continue">
        <button type="button" className="header--button">
          <FaBell size="1rem" />
        </button>
        <button type="button" className="header--button header--button__help">
          <FiHelpCircle size="1.2rem" />
        </button>
        <button type="button" className="header--button header--button__user">
          <FaUser size="2rem" />
        </button>
      </div>
    </HeaderContainer>
  );
};

export default Header;
