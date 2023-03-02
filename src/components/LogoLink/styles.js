import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${() => css`
    display: flex;
    text-align: center;
    text-decoration: none;
    color: inherit;

    > img {
      max-height: 2.5rem;
    }
  `}
`;
