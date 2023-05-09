import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const TweetsPageWrap = styled.div`
  padding: 40px 0 80px 0;
`;

export const BackLink = styled(Link)`
  align-self: flex-start;
  font-size: 20px;
  text-decoration: underline;
  transition: color 0.5s ease;
  padding-top: 40px;

  &:hover,
  &:focus {
    color: var(--bg-primary);
  }
`;
