import React from 'react'
import { AppBar, Toolbar, styled, Box} from "@mui/material"
import image from "../../logo/shopshavvy.png"
//importing headers components
import Search from './Search'
import CustomButtons from './CustomButtons'

const StyledHeader = styled(AppBar)`
background: #2874f0;
height: 55px;
box-Shadow:none;
marginTop:10;
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
      <Toolbar style={{minHeight:55}}>
        <Component>
          <img src={image} style={{ width: 120 }} alt="logo" />
        </Component>
        <Search/>

        <Box>
        <CustomButtons/>
        </Box>

      </Toolbar>
    </StyledHeader>
  )
}

export default Header
