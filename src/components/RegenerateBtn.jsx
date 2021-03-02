import styled from "styled-components";
import Icon from "@material-ui/core/Icon";
import { Link } from "react-router-dom";
const StyledBtn = styled.button`
  border: none;
  background-color: transparent;
  font-size: 18px;
  color: #4f4f4f;
  margin-top: 31px;
  margin-right: 100px;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    color: #333333;
  }
`;

const RegenerateWrapper = styled.div`
  text-align: right;
`;

const RegenerateBtn = ({ fetch }) => {
  return (
    <RegenerateWrapper>
      <Link to="/">
        <StyledBtn onClick={() => fetch()}>
          random <Icon fontSize="inherit">sync</Icon>
        </StyledBtn>
      </Link>
    </RegenerateWrapper>
  );
};

export default RegenerateBtn;
