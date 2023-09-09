import React from 'react'
import { AppBar, Toolbar, styled, Box } from "@mui/material"
import image from "../../logo/shopshavvy.png"

const StyledHeader = styled(AppBar)`
background: #2874f0;
height: 55px;
box-Shadow:none;
`

const Component = styled(Box)`
    margin-left: 12%;
    // line-height: 0;
    // color: #FFFFFF;
    // text-decoration: none;
`;


const Header = () => {
  return (
    <StyledHeader>
      <Toolbar>
        <Component>
          <img src={image} style={{ width: 120 }} alt="logo" />
           <Box>
           </Box>

        </Component>
      </Toolbar>
    </StyledHeader>
  )
}

export default Header
