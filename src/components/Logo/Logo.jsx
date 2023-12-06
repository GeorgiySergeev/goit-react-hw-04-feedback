import { LogoText, LogoContainer, IconCafe } from './Logo.styled';

export const Logo = ({ text }) => {
  return (
    <LogoContainer>
      <IconCafe></IconCafe>

      <LogoText>{text}</LogoText>
    </LogoContainer>
  );
};
