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
      <a
        style={{
          fontWeight: 700,
          textDecoration: "underline",
          color: "#828282",
        }}
        href="https://github.com/loot01/random-quote-website"
      >
        Suleif
      </a>
      - devChallenges.io
    </StyledFooter>
  );
};

export default Footer;
