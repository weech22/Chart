import React from "react";
import styled from "styled-components";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background: purple;
  align-items: center;
  justify-content: center;
  display: none;
`;

const CreateChart = () => {
  return <Root>Create chart</Root>;
};

export default CreateChart;
