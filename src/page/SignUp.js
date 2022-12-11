import { MainStyle } from "../style/MainStyle";
import styled from "styled-components";
import { useState } from "react";
import Input from "../componenet/Input";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(true);
  const [signUpFormData, setSignUpFormData] = useState({
    email: "",
    password: "",
  });
  const regex = /^[0-9A-Za-z._-]+@[0-9A-Za-z._-]+\.[a-zA-Z]{2,3}$/;
  const navigate = useNavigate();
  const onChangeinputValue = (value, name, e) => {
    if (name === "E-mail") {
      setEmail(value);
    }
    if (name === "비밀번호") {
      setPassword(value);
    }
    if (name === "비밀번호 확인") {
      setConfirmPassword(value);
    }
    if (
      regex.test(email) &
        (password !== "") &
        (password.length > 7) &
        (e.target.value === password) ||
      e.target.value === confirmPassword
    ) {
      setSignUpFormData({ email: email, password: password });
      setIsSignUp(false);
    } else {
      setIsSignUp(true);
    }
  };
  const onClickSignUp = (e) => {
    e.preventDefault();

    fetch("http://localhost:8000/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(signUpFormData),
    })
      .then((res) => {
        return res.json(res);
      })
      .then((data) => {
        const { statusCode, message } = data;
        console.log(data);

        if (statusCode) {
          if (statusCode === 400) {
            alert(message);
            return;
          }
        } else {
          alert("회원가입에 성공했습니다.");
          localStorage.setItem("access_token", data.access_token);
          navigate("/todo");
        }
      });
  };
  return (
    <MainStyle>
      <h2 className="title">회원가입</h2>
      <Main>
        <form>
          <Input
            value={email}
            type="email"
            name="E-mail"
            placeholder="아이디를 입력해주세요"
            onChange={onChangeinputValue}
          ></Input>
          <p>{regex.test(email) ? null : "이메일 형식으로 입력해주세요."}</p>
          <Input
            value={password}
            type="password"
            name="비밀번호"
            placeholder="비밀번호를 입력해주세요"
            onChange={onChangeinputValue}
          ></Input>
          <p>{password.length < 8 ? " 8자리 이상 입력해주세요." : null}</p>
          <Input
            value={confirmPassword}
            type="password"
            name="비밀번호 확인"
            placeholder="비밀번호를 입력해주세요"
            onChange={onChangeinputValue}
          ></Input>
          <p>
            {confirmPassword !== password
              ? "동일한 비밀번호를 입력해주세요."
              : null}
          </p>
          <button disabled={isSignUp} onClick={(e) => onClickSignUp(e)}>
            회원가입
          </button>
        </form>
      </Main>
    </MainStyle>
  );
};

const Main = styled.main`
  margin-bottom: 30px;
  box-shadow: 0 4px 2px 0px lightgray;
  border-radius: 10px;
  width: 40%;
  height: calc(100% - 200px);
  background-color: white;
  .inputForm {
    display: flex;
    align-items: center;
    height: 30px;
  }
`;
export default SignUp;
