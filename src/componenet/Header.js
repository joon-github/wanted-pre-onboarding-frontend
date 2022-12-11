import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Header = () => {
  return (
    <HeaderStyle>
      <div className="title">TodoList</div>
      {localStorage.getItem("access_token") ? (
        <div>로그아웃</div>
      ) : (
        <div className="btns">
          <Link className="loginBtn" to="/login">
            로그인
          </Link>
          <Link to="/signup">회원가입</Link>
        </div>
      )}
    </HeaderStyle>
  );
};
const HeaderStyle = styled.header`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
  .title {
    font-size: 20px;
    margin-left: 30px;
    font-weight: bold;
  }
  .btns {
    margin-right: 30px;
    color: black;
    a:visited {
      color: black;
    }
    > a {
      text-decoration: none;
    }
    .loginBtn {
      margin-right: 30px;
    }
  }
`;
export default Header;
