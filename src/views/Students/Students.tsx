import React from 'react';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import NewsSection from 'components/templates/NewsSection/NewsSection';
import StudentsSection from 'components/templates/StudentsSection/StudentsSection';
import styled from 'styled-components';
import { useGetAllGroups } from '../../hooks/useGetAllGroups';
import { useParams } from 'react-router-dom';

const StyledLogo = styled.span`
  grid-row: 1/2;
  grid-column: 1/2;
  display: grid;
  place-items: center;
  text-align: right;
  background: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
  color: white;
`;

const StyledNav = styled.nav`
  grid-column: 1/2;
  grid-row: 2/-1;
  border-right: 1px solid ${({ theme }) => theme.colors.primary};
`;

const StyledSearchBar = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  padding-top: ${({ theme }) => theme.spacing.m};
`;

const StyledFooter = styled.footer`
  grid-column: 2/3;
  grid-row: 3/4;
  text-align: center;
`;

const Students = () => {
  return (
    <MainTemplate>
      <StyledLogo>
        Study <br />
        Buddy
      </StyledLogo>
      <StyledSearchBar>Search bar</StyledSearchBar>
      <NewsSection />
      <StyledNav>Navigation</StyledNav>
      <StudentsSection />
      <StyledFooter>Created by Kamil Budzik</StyledFooter>
    </MainTemplate>
  );
};

export default Students;
