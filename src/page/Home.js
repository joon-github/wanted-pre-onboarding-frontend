import styled from "styled-components";
import { MainStyle } from "../style/MainStyle";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
const Home = () => {
  const navigate = useNavigate();
  if (localStorage.getItem("access_token")) {
    navigate("/todo");
  }
  return (
    <MainStyle>
      <HomeConent>
        <h1>TodoList</h1>
        <Login></Login>
      </HomeConent>
    </MainStyle>
  );
};
const HomeConent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: gray;
  font-size: 30px;
  font-weight: bold;
  .btnArea {
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
export default Home;
