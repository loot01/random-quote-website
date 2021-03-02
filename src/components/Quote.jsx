import styled from "styled-components";

const StyledQuote = styled.div`
  margin-top: 100px;
  text-align: justify;
  font-size: 36px;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  border-left: 8px solid #f7df94;
  padding-left: 99px;
`;

const Quote = ({ text }) => {
  return <StyledQuote>{text}</StyledQuote>;
};

export default Quote;
