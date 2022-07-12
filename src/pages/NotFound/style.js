import styled from "styled-components";

export const NotFoundContainer = styled.div`
  width: 100%;
  transition: all ease 0.5s;
  background-color: var(--bg-primary-color);

  height: 100%;
  overflow-y: auto;
  padding-bottom: 25px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 30px;

  @media (min-width: 600px) {
    margin-left: ${(props) => (props.menuIsExpanded ? "360px" : " 90px")};
    width: ${(props) =>
      props.menuIsExpanded ? "calc(100% - 360px)" : "calc(100% - 90px)"};
  }

  .main {
    margin-top: 95px;

    width: calc(100% - 30px);
    height: calc(100% - 70px);
    @media (min-width: 600px) {
      width: calc(100% - 60px);
    }
    max-width: 970px;
    border-radius: 5px;
    padding: 15px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .main--title {
    font-size: 1rem;
    font-weight: bold;
    text-align: center;

    @media (min-width: 600px) {
      font-size: 1.5rem;
    }
  }
`;
