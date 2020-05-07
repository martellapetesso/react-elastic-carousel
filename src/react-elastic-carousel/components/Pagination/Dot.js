import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { cssPrefix } from "../../utils/helpers";

const boxShadow = "0 0 1px 2px rgba(0, 0, 0, 0.5)";
// const activeBoxShadow = "0 0 1px 3px rgba(103,58,183,1)";
// const hoveredBoxShadow = "0 0 1px 3px rgba(103,58,183,.5)";

const inActiveDot = "#D8D8D8";
const activeDot = "#515151";
const activeBoxShadow = "0 0 1px 3px rgba(81,81,81,1)";
const hoveredBoxShadow = "0 0 1px 3px rgba(81,81,81,.5)";

const Dot = styled.div`
  transition: all 250ms ease;
  margin: 5px;
  background-color: ${({ active }) =>
    active ? `${activeDot}` : `${inActiveDot}`};
  font-size: 1.3em;
  content: "";
  height: 10px;
  width: 10px;
  box-shadow: ${({ active }) => (active ? activeBoxShadow : boxShadow)};
  border-radius: 50%;
  &:hover {
    cursor: pointer;
    box-shadow: ${({ active }) =>
    active ? activeBoxShadow : hoveredBoxShadow};
  }
`;

class DotContainer extends React.Component {
  onClick = () => {
    const { onClick, id } = this.props;
    onClick(id);
  };
  render() {
    const { active } = this.props;
    return (
      <Dot
        onClick={this.onClick}
        active={active}
        className={`${cssPrefix("dot")} ${
          active ? cssPrefix("dot_active") : ""
          }`}
      />
    );
  }
}

DotContainer.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  active: PropTypes.bool,
  onClick: PropTypes.func
};

export default DotContainer;
