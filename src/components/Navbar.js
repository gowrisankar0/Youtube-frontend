import React, { useState } from 'react';
import styled from 'styled-components';
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchIcon from '@mui/icons-material/Search';
import {Link, useNavigate } from "react-router-dom";
import {useSelector} from "react-redux";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import Upload from './Upload';
// import { Avatar } from '@mui/material';


const Container =styled.div`
position: sticky;
top: 0;
background-color: ${({theme})=>theme.bgLighter};
height: 56px;
`
const Wrapper =styled.div`
display:flex;
align-items: center;
height: 100%;
padding: 0px 20px;
justify-content: flex-end;
position: relative;
`
const Search =styled.div`
position: absolute;
left:50px;
width: 40%;
left: 0;
right: 0;
margin: auto;
display: flex;
align-items: center;
justify-content: space-between;
padding: 5px;
border: 1px solid #ccc;
border-radius: 3px;
color:${({theme})=>theme.text}
`
const Input =styled.input`
border: none;
background-color: transparent;
outline: none;
color: ${({ theme }) => theme.text};
`

const Button=styled.button`
padding: 5px 15px;
background-color: transparent;
border: 1px solid #3ea6ff;
color:#3ea6ff;
border-radius: 3px;
font-weight: 500;

cursor: pointer;
display: flex;
align-items: center;
gap:5px;
`

const User =styled.div`
display: flex;
align-items: center;
gap: 10px;
font-weight: 500;
color: ${({theme})=>theme.text};
`

const Avatar =styled.img`
width: 32px;
height: 32px;
border-radius: 50%;
background-color:#999;

`

const Navbar = () => {

  const navigate =useNavigate()

  const [open,setOpen] =useState(false)
  const [q,setQ] =useState("")
const {user}=useSelector((state)=>state.user)

  return (
    <>
    <Container>
      <Wrapper>
        <Search>
         <Input placeholder='search' onChange={(e)=>setQ(e.target.value)}/>
         <SearchIcon onClick={()=>navigate(`/search/q=${q}`)}/>
        </Search>
       { user ?  (
       
        <User>
          <VideoCallOutlinedIcon onClick={()=>setOpen(true)}/> 
          <Avatar src={user.img}/>
          {user.name}  
        </User>


       ) :  (<Link to="signin" style={{textDecoration:'none'}}>
        <Button>
              <AccountCircleOutlinedIcon />
              SIGN IN
            </Button>

        </Link>)}
      </Wrapper>

    </Container>

    {open&& <Upload setOpen={setOpen}/>}
    </>
  )
}

export default Navbar