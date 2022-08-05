import styled from "styled-components";

export const LoginSection = styled.section`
  box-sizing: border-box;
  height: 100vh;
  max-width: 500px;
  margin: 0 auto;
  vertical-align: middle;
  position: relative;
`;

export const PositionCenter = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 20em;
  background-color: white;
  padding: 30px 15px;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 gray;
`;

export const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const TitleSection = styled.div`
  text-align: center;
`;

export const Title = styled.h1`
  font-weight: 600;
  margin: 20px 0 40px;
`;

export const Input = styled.input`
  margin-bottom: 20px;
  border: inherit;
  border-bottom: 1px solid var(--btn-color);
`;

export const Label = styled.label`
  margin-bottom: 5px;
`;

const ButtonStyle = styled.button`
  border: inherit;
  width: 100%;
  border-radius: 10px;
  padding: 10px 0;
  margin-top: 10px;
  cursor: pointer;
`;

export const Button = styled(ButtonStyle)`
  background-color: var(--btn-color);
  color: white;
  border: inherit;
  width: 100%;
  border-radius: 10px;
  padding: 10px 0;
`;

export const JoinBtn = styled(ButtonStyle)`
  background-color: white;
  color: var(--btn-color);
  border: 1px solid var(--btn-color);
  box-sizing: border-box;
`;
