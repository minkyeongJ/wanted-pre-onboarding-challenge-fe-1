const SERVER_URL = "http://localhost:8080";

const USER_VALIDATION_ERRORS = {
  EMPTY_FORM: "이메일 / 패스워드 값이 비어있습니다",
  INVALID_ID: "이메일 형식에 맞게 입력해주세요",
  INVALID_PASSWORD: "패스워드 길이는 8 이상이어야 합니다",
  USER_NOT_FOUND: "로그인에 실패했습니다",
  EXIST_USER: "이미 존재하는 유저입니다",
};

const TODO_VALIDATION_ERRORS = {
  TODO_SOMETHING_WRONG: "todo를 찾는 도중 문제가 생겼습니다",
  INVALID_VALUE: "input을 다시 확인해주세요",
};

export { SERVER_URL, USER_VALIDATION_ERRORS, TODO_VALIDATION_ERRORS };
