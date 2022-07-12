import styled from "styled-components";

export const CategoryContainer = styled.section`
  width: 100%;
  max-width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;

  margin-bottom: 10px;

  position: relative;

  color: var(--text-color);

  &:hover {
    .category--arrow {
      opacity: 1;
    }
  }

  .category--arrow {
    width: 40px;
    height: 180px;

    position: absolute;
    top: calc(1.3rem + 47px);
    z-index: 99;

    opacity: 1;
    @media (min-width: 600px) {
      opacity: 0;
    }
    transition: all ease 0.5s;

    background-color: rgba(0, 0, 0, 0.5);

    font-size: 2rem;
    font-weight: 300;
    color: #fff;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background-color: rgba(0, 0, 0, 0.7);
    }
  }

  .category--arrow__left {
    left: 0;
    border-radius: 5px 0px 0px 5px;
  }

  .category--arrow__right {
    right: 0px;
    border-radius: 0px 5px 5px 0px;
  }

  .category--name {
    width: calc(100% - 15px);
    font-size: 1.3rem;
    font-weight: 700;
    padding-bottom: 15px;
    border-bottom: 2px solid var(--bg-primary-color);
  }

  .category--listarea {
    overflow-x: hidden;
  }

  .category--list {
    transition: all ease 0.5s;
    margin-left: ${(props) => props.scrollX};
    width: ${(props) => props.listWidth};
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 20px;
  }
`;
