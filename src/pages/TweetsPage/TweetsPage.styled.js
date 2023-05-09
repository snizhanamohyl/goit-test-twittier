import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const Tweets = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 40px 0 80px 0;
`;

export const BackLink = styled(Link)`
  align-self: flex-start;
  font-size: 20px;
  text-decoration: underline;
  margin-bottom: 28px;
  transition: color 0.5s ease;

  &:hover,
  &:focus {
    color: var(--bg-primary);
  }
`;

export const LoadMoreBtn = styled.button`
  color: var(--text-primary);
  background-color: var(--bg-primary);
  margin-top: 20px;
`;

export const Msg = styled.p`
  margin-bottom: 40px;
  font-size: 24px;
  line-height: 1.2;
`;
