import { styled } from "styled-components";

export const Dropdown = styled.div`
  width: 260px;
  position: relative;
  display: inline-block;
  margin-bottom: 28px;
`;

export const DropBtn = styled.button`
  width: 100%;
  font-weight: 500;
  text-transform: none;
  font-size: 20px;
  font-family: inherit;

  transition: background-color 0.1s ease;

  &:hover {
    background-color: var(--text-primary);
  }
`;

export const Content = styled.div`
  width: 100%;
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  overflow: hidden;

  transition: all 0.5s ease;

  ${Dropdown}:hover & {
    display: block;
  }
`;

export const FilterOption = styled.button`
  width: 100%;
  display: block;
  border-radius: 0;
  font-size: 20px;
  font-weight: 400;
  text-transform: none;
  text-align: left;
  font-family: inherit;

  transition: background-color 0.2s ease;

  &:hover {
    background-color: var(--text-primary);
  }
`;
