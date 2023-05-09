import styled from "styled-components";

export const TweetCard = styled.li`
  width: 308px;
  height: 396px;
  padding: 28px 36px 36px 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 0;

  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;

  &::after {
    content: "";
    position: absolute;
    left: -36px;
    top: 214px;
    left: 0;
    width: 380px;
    height: 8px;
    z-index: -1;

    background-color: var(--text-primary);
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
  }
`;

export const AvatarShadow = styled.div`
  margin-top: -18px;
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  border-radius: 50%;

  &::after {
    content: "";
    position: absolute;
    width: 80%;
    height: 80%;
    box-shadow: inset 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
      0px -2.19582px 4.39163px #ae7be3, 0px 4.39163px 3.29372px #fbf8ff;
    border-radius: 50%;
    z-index: -1;
  }
`;

export const AvatarImgWrap = styled.div`
  background-color: var(--bg-primary);
  border-radius: 50%;
  overflow: hidden;
`;

export const Text = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  text-transform: uppercase;

  color: var(--text-primary);

  &:not(:last-of-type) {
    margin-bottom: 16px;
  }
`;

export const InfoWrap = styled.div`
  padding: 26px 0;
  text-align: center;
`;

export const Button = styled.button`
  background-color: var(--text-primary);
  color: var(--text-secondary);
  transition: background-color 0.5s ease;

  ${({ isfollowing }) =>
    `background-color: ${
      isfollowing ? "var(--active-btn-color)" : "var(--text-primary)"
    }`};
`;
