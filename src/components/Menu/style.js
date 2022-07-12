import styled from "styled-components";
import { OpacityAnimation } from "../../styles/keyframes";

export const MenuContainer = styled.aside`
  display: ${(props) => (props.isExpanded ? "block" : "none")};

  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;

  width: 100%;
  height: 100%;
  background-color: var(--bg-menu-color);

  transition: width ease-in-out 0.5s;

  @media (min-width: 600px) {
    display: block;
    width: ${(props) => (props.isExpanded ? "360px" : "90px")};
  }

  //LOGO

  .menu--logoarea {
    width: 100%;
    height: 40px;

    display: flex;
    justify-content: ${(props) =>
      props.isExpanded ? "space-between" : "center"};
    padding: ${(props) => (props.isExpanded ? "0 15px" : "0")};
    align-items: center;
    gap: 10px;

    background-color: var(--bg-logo-color);
  }

  .menu--logo {
    width: ${(props) => (props.isExpanded ? "140px" : "40px")};
    height: ${(props) => (props.isExpanded ? "20px" : "16px")};
  }

  .menu--button {
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .menu--arrow {
    width: 20px;
    height: 20px;

    transform: ${(props) => (props.isExpanded ? "scaleX(1)" : "scaleX(-1)")};
    filter: var(--subtext-menu-filter);
  }

  .menu--continue {
    padding: 15px 0px;
    max-height: calc(100vh - 40px);
    overflow-y: auto;
  }

  .menu--group {
    width: 100%;
    padding: 15px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
  }

  .menu--group--title {
    display: ${(props) => (props.isExpanded ? "block" : "none")};
    animation: ${OpacityAnimation} 3s 1;
    color: var(--subtext-menu-color);

    letter-spacing: 1px;
    text-transform: uppercase;
  }

  .menu--link {
    display: flex;
    justify-content: ${(props) => (props.isExpanded ? "flex-start" : "center")};
    gap: 15px;

    &:hover {
      .menu--image {
        filter: var(--subtext-hover-menu-filter);
      }
      .menu--label {
        color: var(--subtext-hover-menu-color);
      }
    }
  }

  .menu--link__active {
    .menu--image {
      filter: var(--active-filter);
    }
    .menu--label {
      color: #fff;
    }

    &:hover {
      .menu--image {
        filter: var(--active-hover-filter);
      }
      .menu--label {
        color: var(--active-hover-color);
      }
    }
  }

  .menu--image {
    filter: var(--subtext-menu-filter);
  }

  .menu--label {
    display: ${(props) => (props.isExpanded ? "block" : "none")};
    animation: ${OpacityAnimation} 3s 1;
    color: var(--text-menu-color);
  }

  .menu--submit {
    width: ${(props) => (props.isExpanded ? "auto" : "24px")};
    height: ${(props) => (props.isExpanded ? "30px" : "24px")};
    padding: ${(props) => (props.isExpanded ? "0px 10px 0px 5px" : "0px 5px")};

    margin: ${(props) =>
      props.isExpanded ? "30px 0px 0px 15px" : "30px auto 0px auto"};

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;

    background-color: var(--submit-color);
    border-radius: 5px;

    .menu--label {
      color: #fff;
    }

    img {
      width: 16px;
      height: 16px;
      object-fit: contain;
    }

    &:hover {
      background-color: var(--submit-color);

      img {
        filter: var(--subtext-menu-filter);
      }

      .menu--label {
        color: var(--text-menu-color);
      }
    }
  }
`;
