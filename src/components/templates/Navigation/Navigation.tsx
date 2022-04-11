import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Wrapper, NavLink, NavList, NavItem } from './Navigation.styles';

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
