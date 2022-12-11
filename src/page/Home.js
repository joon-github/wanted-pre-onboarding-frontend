import styled from "styled-components";
import { MainStyle } from "../style/MainStyle";

const Home = () => {
  return (
    <MainStyle>
      <HomeConent>
        TodoList <br /> 회원 가입 후 이용해주세요
      </HomeConent>
    </MainStyle>
  );
};
const HomeConent = styled.main`
  color: gray;
  font-size: 30px;
  font-weight: bold;
`;
export default Home;
