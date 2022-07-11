import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 70px;
  padding: 0 15px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: var(--bg-secondary-color);
  color: var(--text-color);

  .header--namepage {
    font-size: 1.2rem;
    font-weight: 500;
    flex: 2;
  }

  .header--continue {
    display: flex;
    align-items: center;
    gap: 15px;
  }

  .header--button {
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 1rem;
    color: var(--icon-header-color);
  }

  .header--button__help {
    svg {
      fill: var(--icon-header-secondary-color);
    }

    circle {
      color: var(--icon-header-secondary-color);
    }
  }

  .header--button__user {
    padding: 5px;
    padding-bottom: 0;
    border-radius: 5px;
    background-color: var(--icon-header-secondary-color);
  }

  .header--button__hamb {
    color: var(--text-color);
    margin-right: 15px;

    @media (min-width: 600px) {
      display: none;
    }
  }
`;
