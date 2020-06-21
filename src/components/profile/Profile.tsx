import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Typography, makeStyles, Theme, createStyles, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        card: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            margin: '10px',
        },
        img: {
            justifyContent: 'center',
        }
    }))

export const Profile = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [cookies, setCookie, removeCookie] = useCookies(["access_token"]);

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    // const dispath = useDispatch();
    const history = useHistory();
    const logoutHandler = () => {
        // dispath(logout())
        removeCookie("access_token");

        history.push('/auth/')
    }
    const classes = useStyles();

    return (
        <>
            <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
            >
                <Typography component={"div"}>Профиль</Typography>
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}

            >
                <Typography component={"div"} className={classes.card}>
                    <MenuItem className={classes.img} onClick={handleClose}><AccountCircle /></MenuItem>
                    <MenuItem onClick={handleClose}>Александр</MenuItem>
                    <MenuItem onClick={handleClose}>Админ</MenuItem>
                    <Button onClick={logoutHandler} color="inherit">Выйти</Button>
                </Typography>
            </Menu>
        </>
    )
}