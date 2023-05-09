import { styled } from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  width: 100%;
  background-color: #ffffff;
  padding: 40px 12px;
  font-weight: 500;
  font-size: 24px;
  line-height: 1.2;
  border-bottom: 1px solid var(--text-primary);
`;

export const NavWrap = styled.div`
  max-width: 1180px;
  padding: 0 10px;
  margin-left: auto;
  margin-right: auto;
`;
export const NavItem = styled(NavLink)`
  &:not(:last-child) {
    margin-right: 32px;
  }

  &.active {
    color: var(--bg-primary);
  }
`;
