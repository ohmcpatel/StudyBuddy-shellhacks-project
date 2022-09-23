import React from 'react';
import "./Footer.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MessageIcon from '@mui/icons-material/Message';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import { Icon, IconButton } from '@mui/material';

function Footer() {
    return (
        <div className='footer'>
            <IconButton>
            <MessageIcon fontSize='large'/>
            </IconButton>
            <IconButton>
            <AccountCircleIcon fontSize='large'/>
            </IconButton>
            <IconButton>
            <EmojiPeopleIcon fontSize='large'/>
            </IconButton>
        </div>
    )
}

export default Footer