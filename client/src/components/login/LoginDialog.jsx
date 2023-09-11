import React,{useState} from 'react'
import {Dialog,Box,TextField, Button, Typography,styled} from  "@mui/material"
// importing signup api

import { SignupUser } from '../../service/api'
const Conmponent= styled(Box)`
    height: 70vh;
    width: 90vh;
    padding: 0;
    padding-top: 0;
`
const Image = styled(Box)`
    background: #2B65EC url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
    width: 30%;
    height: 82%;
    padding: 45px 35px;
    & > p, & > h5 {
        color: #FFFFFF;
        font-weight: 600
    }
`
const Wrapper= styled(Box)`
padding: 10px 35px;
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
    view:"login",
    heading:"login",
    subheading:"Give access to your Orders Wishlists and recomendations"
  },
  signup:{
    view:"signup",
    heading:"signup",
    subheading:"welocome to shopshavvy"
  },
}

const signupfield= {
  firstname : "",
  lastname:"",
  username:"",
  email:"",
  password:""
}
const LoginDialog = ({open,setOpen}) => {
 const [account,toggleAccount]= useState(initialaccountview.login)
 const [signup,setSignup]= useState(signupfield)
 
  const dialogClose= ()=>{
    setOpen(false)
    toggleAccount(initialaccountview.login)
  }
  // toggling between signup and login div
  const togglelogintosignup=()=>{
    toggleAccount(initialaccountview.signup)
  }
  const togglesignuptologin=()=>{
    toggleAccount(initialaccountview.login)
  }
  const signupfieldChanged=(e)=>{
        setSignup({...signup,[e.target.name]:e.target.value})
        console.log(signup)
  }

  // api fetch signup /login
  const signupApi=async()=>{
      const data= await SignupUser(signup)
  }

  return (
    <Dialog open= {open} onClose={dialogClose} PaperProps={{ sx: { maxWidth: 'unset' } }}>
      <Conmponent>
        <Box style={{display:'flex',height:"100%"}}>
        <Image>
          <Typography variant='h5'>{account.heading}</Typography>
          <Typography  style={{marginTop:20}}>{account.subheading}</Typography>
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
        <TextField onChange={(e)=>signupfieldChanged(e)} name='firstname'  variant="standard"  label="enter your firstname" />
        <TextField onChange={(e)=>signupfieldChanged(e)} name='lastname'  variant="standard" label="enter your lastname" />
        <TextField onChange={(e)=>signupfieldChanged(e)} name='username'  variant="standard" label="enter your username" />
        <TextField onChange={(e)=>signupfieldChanged(e)} name='email'  variant="standard" label="enter your email address" />
        <TextField onChange={(e)=>signupfieldChanged(e)}  name='password'  variant="standard" label="enter your  password" />
        {/* <TextField  variant="standard" label="enter your  mobile" /> */}
        <LoginButton onClick={()=>signupApi()}>Signup</LoginButton>
        <CreateAccount onClick={()=>togglesignuptologin()}>Already a member ? click to login</CreateAccount>
        </Wrapper>
}
        </Box>
      </Conmponent>
    </Dialog>
  )
}

export default LoginDialog

