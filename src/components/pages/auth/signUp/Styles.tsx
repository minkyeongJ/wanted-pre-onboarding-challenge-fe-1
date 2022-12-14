import styled from "styled-components";

export const JoinSection = styled.section`
  box-sizing: border-box;
  height: 100vh;
  vertical-align: middle;
  position: relative;
  @media screen and (min-width: 767px) {
    margin: 0 auto;
    max-width: 500px;
  }
  @media screen and (max-width: 767px) {
    margin: 0 40px;
  }
`;

export const PositionCenter = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 30px 15px;
  @media screen and (min-width: 767px) {
    width: 20em;
    border-radius: 10px;
    box-shadow: 0 0 10px 0 gray;
    /* display: none; */
  }
  @media screen and (max-width: 767px) {
    width: 100%;
  }
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
  border: inherit;
  border-bottom: 1px solid var(--btn-color);
`;

export const Label = styled.label`
  margin: 20px 0 5px;
`;

const ButtonStyle = styled.button`
  border: inherit;
  width: 100%;
  border-radius: 10px;
  padding: 10px 0;
  margin: 30px 0 10px;
  cursor: pointer;
`;

export const Button = styled(ButtonStyle)`
  background-color: var(--btn-color);
  color: white;
  border: inherit;
  width: 100%;
  border-radius: 10px;
  padding: 10px 0;
  &:disabled {
    cursor: default;
    opacity: 0.5;
    background: var(--btn-color);
  }
`;

export const JoinBtn = styled(ButtonStyle)`
  background-color: white;
  color: var(--btn-color);
  border: 1px solid var(--btn-color);
  box-sizing: border-box;
`;

export const Validate = styled.p`
  color: red;
  margin-top: 5px;
  font-size: 1.2rem;
`;
