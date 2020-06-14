import React, { FC } from "react"
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { useStylesDrawer, LinkStyles } from "./ItemDrawerStyles";
import { Link, useLocation, matchPath } from "react-router-dom";

interface IProps {
    title: string;
    link: string;
    svg?: string;
}

export const ItemDrawer: FC<IProps> = ({ title, link, svg }) => {
    const classes = useStylesDrawer();
    const links = LinkStyles();
    const location = useLocation();


    return (
        <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            className={classes.root}
        >
            <Link className={links.link} to={`/${link}`}>

                <ListItem
                    button
                    selected={!!matchPath(location.pathname, `/${link}`)}>

                    <ListItemText primary={title} />
                    {svg && <img style={{ height: '30px' }} src={svg} alt={`${svg}`} />}
                </ListItem>
            </Link>
        </List>
    )
}