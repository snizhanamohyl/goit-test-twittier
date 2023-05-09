import { styled } from 'styled-components';

export const TweetsWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 28px;
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
