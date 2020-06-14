import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import AccessibleIcon from '@material-ui/icons/Accessible';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Hidden } from '@material-ui/core';
import classnames from "classnames";
import { ItemDrawer } from '../../components/itemDrawer/ItemDrawer';
import { Users } from '../../modules/users/Users';
import { Route } from 'react-router-dom';
import { Profile } from "../../components/profile/Profile"
import { Greeting } from "../greeting/Greeting"
import { Test } from "../test/Test"
const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        drawer: {
            [theme.breakpoints.up('sm')]: {
                width: drawerWidth,
                flexShrink: 0,
            },
        },
        appBar: {
            [theme.breakpoints.up('sm')]: {
                width: `calc(100% - ${drawerWidth}px)`,
                marginLeft: drawerWidth,
            },
        },
        menuButton: {
            marginRight: theme.spacing(2),
            [theme.breakpoints.up('sm')]: {
                display: 'none',
            },
        },
        toolbar: theme.mixins.toolbar,
        toolbarLogo: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        drawerPaper: {
            width: drawerWidth,
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
        },
        profile: {
            marginLeft: 'auto',
            display: 'flex',
        },
    }),
);

const tabsDrawer = [{
    name: "Главная",
    link: "main"
}, {
    name: "Тесты",
    link: "tests"
}, {
    name: "Темы",
    link: "themes"
}, {
    name: "Вопросы",
    link: "questions"
}, {
    name: "Пользователи",
    link: "users"
}, {
    name: "Логи",
    link: "logs"
}
]

export const ResponsiveDrawer = () => {
    const classes = useStyles();
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <div className={classnames(classes.toolbar, classes.toolbarLogo)}>
                <AccessibleIcon fontSize={"large"} />
            </div>
            <Divider />
            {tabsDrawer.map((item, index) => (
                <ItemDrawer
                    key={index}
                    title={item.name}
                    link={item.link}
                />
            ))}
        </div>
    );

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Тестер
                    </Typography>
                    <Typography className={classes.profile}>
                        <Profile />
                    </Typography>
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label="mailbox folders">
                <Hidden smUp implementation="css">
                    <Drawer
                        variant="temporary"
                        anchor={'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true,
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Typography paragraph>
                    <Route path={"/users/"}>
                        <Users />
                    </Route>
                    <Route path={"/main/"}>
                        <Greeting />
                    </Route>
                    <Route path={"/tests/"}>
                        <Test />
                    </Route>
                </Typography>
            </main>
        </div>
    );
}