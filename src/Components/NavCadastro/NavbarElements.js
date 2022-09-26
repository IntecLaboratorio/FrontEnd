import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
  
export const Nav = styled.nav`
  background: transparent;
  height: 50px;
  display: flex;
  justify-content: center;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
`;
  
export const NavLink = styled(Link)`
  color: #C0C0C0;
  display: flex;
  align-items: center;
  text-decoration: none;
  text-transform: uppercase;
  padding: 0 4rem;
  height: 100%;
  cursor: pointer;
  &.active {
    transition: .2s;
    font-weight: bold;
    color: #FFFFFF;
    border-bottom: 2px solid #fff;
  }
`;
  
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  @media screen and (max-width: 768px) {
    max-width: 80%;
  }
`;
  