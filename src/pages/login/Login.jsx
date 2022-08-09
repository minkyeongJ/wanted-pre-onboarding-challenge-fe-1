import React from "react";
import {
  Button,
  Input,
  InputSection,
  JoinBtn,
  Label,
  LoginSection,
  PositionCenter,
  Title,
  TitleSection,
} from "./Styles";

export default function Login() {
  return (
    <>
      <LoginSection>
        <PositionCenter>
          <TitleSection>
            <Title>로그인</Title>
          </TitleSection>
          <InputSection>
            <Label htmlFor="input_id">아이디</Label>
            <Input
              type="email"
              id="input_id"
              placeholder="아이디를 입력하세요."
            />
            <Label htmlFor="input_pw">비밀번호</Label>
            <Input
              type="password"
              id="input_pw"
              placeholder="비밀번호를 입력하세요."
            />
          </InputSection>
          <Button>login</Button>
          <JoinBtn>회원가입</JoinBtn>
        </PositionCenter>
      </LoginSection>
    </>
  );
}
