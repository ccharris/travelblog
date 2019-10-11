import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 4rem;
  padding: 0 4rem;
  margin: 2rem 0;
  a {
    color: #002b34;
    transition: color 0.2s ease;
    text-decoration: none;
    margin-right: 8px;
    &:hover {
      color: inherit;
    }
  }
  ${MEDIA.TABLET`
    display: block;
  `};
`;
