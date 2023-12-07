import styled from '@emotion/styled';

export const Button = styled.button`
  width: 108px;
  height: 28px;
  color: blue;
  color: black;
  font-weight: 500;
  font-size: 18px;
  cursor: pointer;
  border-radius: 15px;
  border: none;
  :hover {
    scale: 101%;
  }

  ${props => {
    switch (props.buttonStyle) {
      case 'good':
        return `
          background-color: green;
          color: white;
        `;
      case 'neutral':
        return `
          background-color: #edebe8;
        `;
      case 'bad':
        return `
          background-color: red;
          color: white;
        `;
      case 'reset':
        return `
          background-color: orange;
          color: red;
          margin-left: 20px;
          width: 56px;
          font-size: 8px;
          height:16px;
          
          
          `;
      default:
        return `background-color: grey;`;
    }
  }}
`;

export const ButtonList = styled.ul`
  display: flex;
  gap: 15px;
  margin-top: 25px;
  margin-bottom: 25px;
  justify-content: center;
`;
