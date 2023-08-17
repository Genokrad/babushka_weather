import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  width: 320px;
  /* height: 56px; */
  border-radius: 40px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: 'Manrope-Regular';
  font-size: 16px;
  line-height: 1;
  color: var(--text-green-color);
  transition: 0.2s;
  @media screen and (min-width: 600px) {
    font-size: 24px;
    width: 320px;
    height: 56px;
  }

  /* background-color: var(--button-bcg-yellow); */
  &:hover {
    background-color: var(--button-bcg-green);
    font-family: 'Manrope-Bold';
    color: var(--text-white-color);
    transition: 0.2s;
  }
  &.active {
    background-color: var(--button-bcg-green);
    font-family: 'Manrope-Bold';
    color: var(--text-white-color);
  }
`;

export const SyledNav = styled('nav')`
  margin-top: 24px;
  border-radius: 40px;
  background-color: var(--button-bcg-yellow);

  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 600px) {
    margin-top: 32px;
  }
`;
