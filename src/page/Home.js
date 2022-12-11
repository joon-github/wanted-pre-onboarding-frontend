import styled from "styled-components";

const Home = () => {
  return (
    <HomeStyle>
      <p className="content">
        TodoList <br /> 회원 가입 후 이용해주세요
      </p>
    </HomeStyle>
  );
};
const HomeStyle = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  height: calc(100vh - 50px);
  background-color: rgb(244, 244, 244);
  .content {
    color: gray;
    font-size: 30px;
    font-weight: bold;
  }
`;
export default Home;
