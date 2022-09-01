import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  Heading,
  FooterLink
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
          <Column>
            <Heading>Contact Us</Heading>
            <p><strong>email:</strong> tibasasa@gmail.com</p>
            <p><strong>Tel:</strong> +254 758982500</p>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <p>facebook</p>
            <p>instagram</p>
            <p>twitter</p>
          </Column> 
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;