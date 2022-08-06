import React from "react";
import {
  Button,
  Input,
  InputSection,
  JoinBtn,
  JoinSection,
  Label,
  PositionCenter,
  Title,
  TitleSection,
} from "./Styles";

export default function SignUp() {
  return (
    <>
      <JoinSection>
        <PositionCenter>
          <TitleSection>
            <Title>회원가입</Title>
          </TitleSection>
          <InputSection>
            <Label htmlFor="input_id">아이디</Label>
            <Input
              type="text"
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
          <Button>회원가입</Button>
        </PositionCenter>
      </JoinSection>
    </>
  );
}
