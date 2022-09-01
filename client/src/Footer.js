import React from "react";
import {
  Box,
  Container,
  Row,
} from "./FooterStyles";
  
const Footer = () => {
  return (
    <Box>
      
      <Container>
      <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#">about</FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;