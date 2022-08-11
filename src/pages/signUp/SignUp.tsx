import React, { useState } from "react";
import {
  Button,
  Input,
  InputSection,
  JoinSection,
  Label,
  PositionCenter,
  Title,
  TitleSection,
} from "./Styles";
import useSignUp from "../../hooks/useSignUp";
import useHandleSignUp from "../../hooks/useHandleSignUp";

export default function SignUp() {
  const { error, signUp } = useSignUp();
  const { userInfo, handleId, handelPw } = useHandleSignUp();

  const onSubmitSignUp = (e: any) => {
    e.preventDefault();
    console.log(userInfo);
    signUp(userInfo).then((response) => console.log(response));
    console.log(error);
  };

  return (
    <>
      <JoinSection>
        <PositionCenter>
          <TitleSection>
            <Title>회원가입</Title>
          </TitleSection>
          <form method="post" onSubmit={onSubmitSignUp}>
            <InputSection>
              <Label htmlFor="input_id">아이디</Label>
              <Input
                type="email"
                name="userId"
                id="input_id"
                placeholder="아이디를 입력하세요."
                onChange={handleId}
              />
              <Label htmlFor="input_pw">비밀번호</Label>
              <Input
                type="password"
                name="userPw"
                id="input_pw"
                placeholder="비밀번호를 입력하세요."
                onChange={handelPw}
              />
            </InputSection>
            <Button type="submit">회원가입</Button>
          </form>
        </PositionCenter>
      </JoinSection>
    </>
  );
}
