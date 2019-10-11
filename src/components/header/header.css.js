import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 1.5rem;
  padding-left: 4rem;
  background-color: #006b80;

  a {
    color: white;
    transition: color 0.2s ease;
    text-decoration: none;
    margin-right: 8px;

    &:hover {
      color: inherit;
    }
  }
`;
