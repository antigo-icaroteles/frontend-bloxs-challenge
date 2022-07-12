import { MenuContainer } from "./style";

import Logo from "../../assets/images/logo-mobile.png";
import LogoExpanded from "../../assets/images/logo.png";
import ArrowLeft from "../../assets/images/icons/arrow-left.svg";
import Academy from "../../assets/images/icons/academy.svg";
import Chat from "../../assets/images/icons/chat.svg";
import Dashboard from "../../assets/images/icons/dashboard.svg";
import Companies from "../../assets/images/icons/empresas.svg";
import Events from "../../assets/images/icons/eventos.svg";
import Forum from "../../assets/images/icons/forum.svg";
import Home from "../../assets/images/icons/home.svg";
import Indications from "../../assets/images/icons/indicacoes.svg";
import News from "../../assets/images/icons/noticias.svg";
import Projects from "../../assets/images/icons/projetos.svg";
import Earnings from "../../assets/images/icons/proventos.svg";
import Services from "../../assets/images/icons/servicos.svg";
import Check from "../../assets/images/icons/check-solid.svg";

import { useMenu } from "../../providers/menu";
import { NavLink } from "react-router-dom";

const Menu = () => {
  const { menuIsExpanded, handleMenu } = useMenu();
  return (
    <MenuContainer isExpanded={menuIsExpanded} role="menu">
      <div className="menu--logoarea">
        <img
          className="menu--logo"
          src={menuIsExpanded ? LogoExpanded : Logo}
          alt="Bloxs Logo"
        />
        <button type="button" className="menu--button" onClick={handleMenu}>
          <img className="menu--arrow" src={ArrowLeft} alt="Seta Dupla" />
        </button>
      </div>
      <div className="menu--continue">
        <section className="menu--group">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "menu--link menu--link__active" : "menu--link"
            }
          >
            <img
              className="menu--image"
              src={Home}
              alt="Ícone da Página Home"
            />
            <span className="menu--label">Home</span>
          </NavLink>
        </section>
        <section className="menu--group">
          <h3 className="menu--group--title">Área do Empreendedor</h3>
          <NavLink
            to="/entrepreneur/dashboard"
            className={({ isActive }) =>
              isActive ? "menu--link menu--link__active" : "menu--link"
            }
          >
            <img
              className="menu--image"
              src={Dashboard}
              alt="Ícone da Página Dashboard"
            />
            <span className="menu--label">Dashboard</span>
          </NavLink>
          <NavLink
            to="/entrepreneur/companies"
            className={({ isActive }) =>
              isActive ? "menu--link menu--link__active" : "menu--link"
            }
          >
            <img
              className="menu--image"
              src={Companies}
              alt="Ícone da Página Empresas"
            />
            <span className="menu--label">Empresas</span>
          </NavLink>
          <NavLink
            to="/entrepreneur/projects"
            className={({ isActive }) =>
              isActive ? "menu--link menu--link__active" : "menu--link"
            }
          >
            <img
              className="menu--image"
              src={Projects}
              alt="Ícone da Página Projetos"
            />
            <span className="menu--label">Projetos</span>
          </NavLink>

          <NavLink
            to="/entrepreneur/chat"
            className={({ isActive }) =>
              isActive ? "menu--link menu--link__active" : "menu--link"
            }
          >
            <img
              className="menu--image"
              src={Chat}
              alt="Ícone da Página Chat"
            />
            <span className="menu--label">Chat</span>
          </NavLink>

          <NavLink
            to="/entrepreneur/earnings"
            className={({ isActive }) =>
              isActive ? "menu--link menu--link__active" : "menu--link"
            }
          >
            <img
              className="menu--image"
              src={Earnings}
              alt="Ícone da Página Proventos"
            />
            <span className="menu--label">Proventos</span>
          </NavLink>

          <NavLink
            to="/entrepreneur/indications"
            className={({ isActive }) =>
              isActive ? "menu--link menu--link__active" : "menu--link"
            }
          >
            <img
              className="menu--image"
              src={Indications}
              alt="Ícone da Página Indicações"
            />
            <span className="menu--label">Indicações</span>
          </NavLink>
        </section>
        <section className="menu--group">
          <h3 className="menu--group--title">Comunidade</h3>
          <NavLink
            to="/community/forum"
            className={({ isActive }) =>
              isActive ? "menu--link menu--link__active" : "menu--link"
            }
          >
            <img
              className="menu--image"
              src={Forum}
              alt="Ícone da Página Fórum"
            />
            <span className="menu--label">Fórum</span>
          </NavLink>

          <NavLink
            to="/community/academy"
            className={({ isActive }) =>
              isActive ? "menu--link menu--link__active" : "menu--link"
            }
          >
            <img
              className="menu--image"
              src={Academy}
              alt="Ícone da Página Academy"
            />
            <span className="menu--label">Academy</span>
          </NavLink>

          <NavLink
            to="/community/events"
            className={({ isActive }) =>
              isActive ? "menu--link menu--link__active" : "menu--link"
            }
          >
            <img
              className="menu--image"
              src={Events}
              alt="Ícone da Página Eventos"
            />
            <span className="menu--label">Eventos</span>
          </NavLink>

          <NavLink
            to="/community/news"
            className={({ isActive }) =>
              isActive ? "menu--link menu--link__active" : "menu--link"
            }
          >
            <img
              className="menu--image"
              src={News}
              alt="Ícone da Página Notícias"
            />
            <span className="menu--label">Notícias</span>
          </NavLink>

          <NavLink
            to="/community/services"
            className={({ isActive }) =>
              isActive ? "menu--link menu--link__active" : "menu--link"
            }
          >
            <img
              className="menu--image"
              src={Services}
              alt="Ícone da Página Serviços"
            />
            <span className="menu--label">Serviços</span>
          </NavLink>
        </section>

        <button type="button" className="menu--submit">
          <img src={Check} alt="Ícone de Confirmação" />
          <span className="menu--label">Submeter Projeto</span>
        </button>
      </div>
    </MenuContainer>
  );
};

export default Menu;
