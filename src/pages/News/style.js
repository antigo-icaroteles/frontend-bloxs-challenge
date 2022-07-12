import styled from "styled-components";

export const NewsContainer = styled.div`
  width: 100%;
  transition: all ease 0.5s;
  background-color: var(--bg-primary-color);

  min-height: 100%;
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
    @media (min-width: 600px) {
      width: calc(100% - 60px);
    }
    max-width: 970px;
    background-color: var(--bg-secondary-color);
    border-radius: 5px;
    padding: 15px 0px 15px 15px;
    overflow-x: hidden;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 30px;
  }
`;
