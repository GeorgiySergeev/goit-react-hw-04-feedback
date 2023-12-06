import styled from '@emotion/styled';
import { IoIosCafe } from 'react-icons/io';

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
  align-items: center;
  color: green;
`;

export const LogoText = styled.p`
  text-align: center;
  font-size: 16px;
  letter-spacing: 2px;
  text-decoration: underline;
  font-style: italic;
`;

export const IconCafe = styled(IoIosCafe)`
  color: red;
  width: 18px;
`;
