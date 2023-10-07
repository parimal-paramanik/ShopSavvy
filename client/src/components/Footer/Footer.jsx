import React from 'react';
import { AppBar, Typography, Box, styled } from '@mui/material';

const Mainbox = styled(AppBar)`
  background-color: #212121;
  margin-top: 60px;
  padding: 20px 0;
  height:130px;
`;

const LeftContent = styled(Typography)`
  color: white;
  font-size: 16px;
  text-align: center;
`;
const RightContent= styled(Typography)`
color: white;
font-size: 16px;
text-align: center;
margin-left:auto;

`
const Toolbar = styled(Box)`
 display:flex;
`

const Footer = () => {
  return (
    <Mainbox position="static">
      <Toolbar>
        
        <LeftContent>
          © 2023 Your Company Name. All Rights Reserved.
          <br />
          Address: 1234 Example St, City, Country
          <br />
          Email: contact@example.com
        </LeftContent>
        <RightContent>
            hello fuck you
        </RightContent>
        
       
      </Toolbar>
    </Mainbox>
  );
};

export default Footer;
