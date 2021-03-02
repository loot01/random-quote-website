import styled from "styled-components";

const StyledFooter = styled.div`
  text-align: center;
  color: #828282;
  font-size: 14px;
  font-weight: 500;
  margin-top: 89px;
`;

const Footer = () => {
  return (
    <StyledFooter>
      Created by{" "}
      <span style={{ fontWeight: 700, textDecoration: "underline" }}>
        Suleif
      </span>{" "}
      - devChallenges.io
    </StyledFooter>
  );
};

export default Footer;
