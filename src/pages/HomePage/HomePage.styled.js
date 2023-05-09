import { styled } from 'styled-components';

export const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 20px;
  line-height: 1.2;
  color: var(--bg-primary);
`;

export const Descr = styled.p`
  font-size: 20px;
  line-height: 1.2;
`;

export const Hero = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 60px 0;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 50px;
  }
`;

export const ImgWrap = styled.div`
  width: 80%;
`;
