import React from 'react';
import { AppBar, Typography, Toolbar, styled } from '@mui/material';

const Mainbox = styled(AppBar)`
  background-color: #212121;
  margin-top: 60px;
  padding: 20px 0;
`;

const FooterContent = styled(Typography)`
  color: white;
  font-size: 16px;
  text-align: center;
`;

const Footer = () => {
  return (
    <Mainbox position="static">
      <Toolbar>
        <FooterContent>
          © 2023 Your Company Name. All Rights Reserved.
          <br />
          Address: 1234 Example St, City, Country
          <br />
          Email: contact@example.com
        </FooterContent>
       
      </Toolbar>
    </Mainbox>
  );
};

export default Footer;
