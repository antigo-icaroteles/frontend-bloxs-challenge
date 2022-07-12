import styled from "styled-components";

export const NewsContainer = styled.div`
  width: 100%;
  transition: all ease 0.5s;
  @media (min-width: 600px) {
    margin-left: ${(props) => (props.menuIsExpanded ? "360px" : " 90px")};
    width: ${(props) =>
      props.menuIsExpanded ? "calc(100% - 360px)" : "calc(100% - 90px)"};
  }
`;
