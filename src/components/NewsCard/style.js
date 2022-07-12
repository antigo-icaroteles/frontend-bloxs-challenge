import styled from "styled-components";

export const NewsCardContainer = styled.li`
  width: 300px;

  list-style: none;

  display: flex;
  flex-direction: column;
  gap: 10px;

  .card--image {
    width: 100%;
    height: 180px;
    border-radius: 5px;
    background: ${(props) =>
      props.isLoading && "linear-gradient(to right, #E3E3E3, #D6D6D6)"};
  }

  .card--description {
    width: 100%;
    min-height: 1rem;
    max-height: 4.5rem;
    overflow-y: hidden;
    font-weight: 600;
    text-align: justify;
    background: ${(props) =>
      props.isLoading && "linear-gradient(to right, #E3E3E3, #D6D6D6)"};
  }

  .card--date {
    display: inline;
    min-height: 1rem;
    width: ${(props) => props.isLoading && "50%"};
    font-weight: 500;
    color: var(--subtext-color);
    background: ${(props) =>
      props.isLoading && "linear-gradient(to right, #E3E3E3, #D6D6D6)"};
  }
`;
