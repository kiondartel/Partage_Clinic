import Search from "antd/es/input/Search";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
`;
export const StyledSearch = styled(Search)`
  width: 450px;
  margin-bottom: 16px;
  margin-left: 10px;
`;