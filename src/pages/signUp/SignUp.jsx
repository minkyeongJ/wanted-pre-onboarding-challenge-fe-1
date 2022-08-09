import React, { useState } from "react";
import useSignUp from "../../hooks/useSignUp";
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

export default function SignUp() {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const { error, signUp } = useSignUp();

  const inputHandle = (e) => {
    switch (e.target.type) {
      case "email":
        setUserInfo((currentData) => ({
          ...currentData,
          email: e.target.value,
        }));
        break;
      case "password":
        setUserInfo((currentData) => ({
          ...currentData,
          password: e.target.value,
        }));
        break;
      default:
        console.log("아이디와 비밀번호가 선택되지 않았습니다.");
    }
  };

  const onSubmitSignUp = (e) => {
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
                onChange={inputHandle}
              />
              <Label htmlFor="input_pw">비밀번호</Label>
              <Input
                type="password"
                name="userPw"
                id="input_pw"
                placeholder="비밀번호를 입력하세요."
                onChange={inputHandle}
              />
            </InputSection>
            <Button type="submit">회원가입</Button>
          </form>
        </PositionCenter>
      </JoinSection>
    </>
  );
}
