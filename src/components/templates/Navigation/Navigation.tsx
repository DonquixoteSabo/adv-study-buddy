import React, { useEffect, useState } from 'react';

//styles file
import styled, { css } from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

export const Wrapper = styled.nav`
  grid-column: 1/2;
  grid-row: 2/-1;
  border-right: 1px solid ${({ theme }) => theme.colors.gray};
`;

export const NavList = styled.ul`
  list-style: none;
  padding: 0;
  font-family: ${({ theme }) => theme.fontFamily.roboto};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
  text-align: center;

  .active {
    color: red;
  }
`;

interface NavItemProps {
  isActive: boolean;
}

export const NavItem = styled.li<NavItemProps>`
  position: relative;
  padding: ${({ theme }) => theme.spacing.m} 0;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    right: 50%;
    height: 2px;
    background: ${({ theme }) => theme.colors.gray};
    transition: 0.3s ease-in-out;
  }

  &:hover {
    &:before {
      left: 10%;
      right: 10%;
    }
  }

  ${({ isActive }) =>
    isActive &&
    css`
      &::after {
        content: '';
        position: absolute;
        right: 0;
        top: calc(50% - 3px);
        height: 3px;
        background: ${({ theme }) => theme.colors.gray};
        width: 18px;
      }

      &::before {
        background: transparent;
      }
    `};
`;

export const NavLink = styled(Link)`
  text-decoration: none;
`;
//

const navItems = [
  {
    txt: 'Dashboard',
    link: '/',
  },
  {
    txt: 'Notes',
    link: '/notes/',
  },
  {
    txt: 'Exams',
    link: '/exams/',
  },
];

const Navigation = () => {
  const location = useLocation();
  const [active, setActive] = useState('');

  //Can't use default NavLink from react-router dom (because of students route)
  useEffect(() => {
    if (location.pathname.includes('notes')) {
      setActive('/notes/');
    } else if (location.pathname.includes('exams')) {
      setActive('/exams/');
    } else {
      setActive('/');
    }
  }, [location]);

  return (
    <Wrapper>
      <NavList>
        {navItems.map(({ txt, link }) => (
          <NavItem key={link} isActive={active === link}>
            <NavLink to={link}>{txt}</NavLink>
          </NavItem>
        ))}
      </NavList>
    </Wrapper>
  );
};

export default Navigation;
