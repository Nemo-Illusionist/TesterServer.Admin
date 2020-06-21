import React from "react"
import { CircularProgress, makeStyles } from '@material-ui/core';

interface IProps {
    loading: boolean;
}

const useStyles = makeStyles(() => ({
    centerScreen: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        minHeight: '100vh',
        margin: 'auto'
    }
}))

export const Loading: React.FC<IProps> = React.memo(({ loading, children }) => {

    const classes = useStyles();

    return (
        <>
            {loading ? <CircularProgress className={classes.centerScreen} /> : children}
        </>
    )
})