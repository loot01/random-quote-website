import styled from "styled-components";
import Icon from "@material-ui/core/Icon";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledBtn = styled.button`
  border: none;
  background-color: transparent;
  text-align: left;
  padding: 50px 33px 49px 23px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  cursor: pointer;
  &:hover {
    background-color: #333333;
  }
  transition: background-color 100ms;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
`;

const AuthorName = styled.span`
  font-weight: 700;
  font-size: 24px;
  color: #4f4f4f;

  ${StyledBtn}:hover & {
    color: white;
  }
`;

const Genre = styled.span`
  font-weight: 500;
  font-size: 14px;
  color: #828282;
`;

const QuoteDetails = ({ author, genre }) => {
  return (
    <Wrapper>
      <Link
        to={`/author/${author}`}
        style={{
          textDecoration: "none",
          width: "50%",
          height: "50%",
          marginTop: "109px",
        }}
      >
        <StyledBtn>
          <Details>
            <AuthorName>{author ? author : ""}</AuthorName>
            <Genre>{genre ? genre : ""}</Genre>
          </Details>
          <Icon fontSize="large" style={{ color: "white" }}>
            arrow_right_alt
          </Icon>
        </StyledBtn>
      </Link>
    </Wrapper>
  );
};

export default QuoteDetails;
