import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`;

export const Name = styled.h1`
  font-family: "SFMono-Bold", monospace;
  font-size: 48px;
  margin: 0;
  color: #f5f5f5;
  letter-spacing: -1px;

  @media (max-width: 768px) {
    font-size: 36px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
    letter-spacing: -0.5px;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  margin: 24px 0;

  @media (max-width: 480px) {
    gap: 16px;
  }
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.06);
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.12);
    transform: translateY(-2px);
  }

  img {
    width: 24px;
    height: 24px;
    filter: grayscale(100%) brightness(1.8);
    transition: filter 0.2s ease;
  }

  &:hover img {
    filter: grayscale(0%) brightness(1);
  }

  @media (max-width: 768px) {
    width: 44px;
    height: 44px;

    img {
      width: 22px;
      height: 22px;
    }
  }

  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
    border-radius: 10px;

    img {
      width: 20px;
      height: 20px;
    }
  }
`;
