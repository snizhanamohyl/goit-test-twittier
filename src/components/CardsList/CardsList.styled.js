import { styled } from 'styled-components';

export const TweetsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media screen and (min-width: 1200px) {
    justify-content: flex-start;
  }
`;
