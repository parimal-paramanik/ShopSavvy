import React,{useState} from 'react'
import {Dialog,Box,TextField, Button, Typography,styled} from  "@mui/material"
const Conmponent= styled(Box)`
height: 70vh;
width: 90vh;
`
const Image = styled(Box)`
    background: #2B65EC url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 65% no-repeat;
    width: 40%;
    height: 100%;
    padding: 45px 35px;
    & > p, & > h5 {
        color: #FFFFFF;
        font-weight: 600
    }
`
const Wrapper= styled(Box)`
padding: 25px 35px;
display: flex;
flex: 1;
overflow: auto;
flex-direction: column;
& > div, & > button, & > p {
    margin-top: 20px;
}
`
const LoginButton = styled(Button)`
    text-transform: none;
    background: #FB641B;
    color: #fff;
    height: 48px;
    // width:200px;
    border-radius: 2px;
`;
const RequestOTP = styled(Button)`
    text-transform: none;
    background: #fff;
    color: #2874f0;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;
const Text = styled(Typography)`
    color: #878787;
    font-size: 12px;
`;
const CreateAccount = styled(Typography)`
    margin: auto 0 5px 0;
    text-align: center;
    color: #2874f0;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer
`

const initialaccountview={
  login:{
    view:"login"
  },
  signup:{
    view:"signup"
  },
}
const LoginDialog = ({open,setOpen}) => {
 const [account,toggleAccount]= useState(initialaccountview.login)
 
  const dialogClose= ()=>{
    setOpen(false)
  }
  // toggling between signup and login div
  const togglelogintosignup=()=>{
    toggleAccount(initialaccountview.signup)
  }
  const togglesignuptologin=()=>{
    toggleAccount(initialaccountview.login)
  }

  return (
    <Dialog open= {open} onClose={dialogClose} PaperProps={{ sx: { maxWidth: 'unset' } }}>
      <Conmponent>
        <Box style={{display:'flex',height:"100%"}}>
        <Image>
          <Typography variant='h5'>Login</Typography>
          <Typography  style={{marginTop:20}}>Give access to your Orders Wishlists and recomendations</Typography>
        </Image>
        {
         account.view === "login"? 
        <Wrapper>
        <TextField  variant="standard" label="enter email address." />
        <TextField  variant="standard" label="enter  password" />
        <Text>By continueing, you agree to shopshavvy's term of use and privacy policy </Text>
        <LoginButton>Login</LoginButton>
        <Typography style={{textAlign:'center'}}>OR</Typography>
        <RequestOTP>Request OTP</RequestOTP>
        <CreateAccount onClick={()=>togglelogintosignup()}>New to shopshavvy ? Create an account</CreateAccount>
        </Wrapper>
        :
        <Wrapper>
        <TextField  variant="standard" label="enter your firstname" />
        <TextField  variant="standard" label="enter your lastname" />
        <TextField  variant="standard" label="enter your username" />
        <TextField  variant="standard" label="enter your email address" />
        <TextField  variant="standard" label="enter your  password" />
        <LoginButton>Signup</LoginButton>
        <CreateAccount onClick={()=>togglesignuptologin()}>Already a member ? click to login</CreateAccount>
        </Wrapper>
}
        </Box>
      </Conmponent>
    </Dialog>
  )
}

export default LoginDialog

