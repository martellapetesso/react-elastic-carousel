import styled from "styled-components";

const inActiveDot = "#D8D8D8";

export default styled.button`
  transition: all 0.3s ease;
  font-size: 1.6rem;
  background-color: transparent;
  color: #333;
  // box-shadow: 0 0 2px 0px #333;
  // border-radius: 50%;
  border: none;
  width: 50px;
  height: 50px;
  min-width: 50px;
  line-height: 50px;
  align-self: center;
  cursor: pointer;
  outline: none;
  &:hover {
    color: #D8D8D8;
    background-color: transparent;
    // box-shadow: 0 0 2px 0px #333;
  }
`;
