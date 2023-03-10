import styled, { css } from 'styled-components';
import { Container as TextComponent } from '../TextComponent/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    > ${TextComponent} {
      margin-bottom: ${theme.spacings.xhuge};
    }
  `}
`;

export const Grid = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: ${theme.spacings.large};
  `}
`;

export const GridElement = styled.div`
  ${() => css`
    overflow: hidden;
    transition: all 400ms ease-in-out;
  `}
`;

export const Image = styled.img`
  ${() => css`
    width: 100%;

    &:hover {
      transform: scale(1.1) rotate(10deg);
    }
  `}
`;
