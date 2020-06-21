import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import boy from "../../resources/boy.svg"
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { IAppState } from "../../core/mainReducer";
import { authorization } from "../../store/auth/authActions"
import { useCookies } from 'react-cookie';
import { Loading } from "../../components/loading/Loading"

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        height: 45
    },
    authText: {
        marginTop: 20,
        fontWeight: "bold"
    },
    img: {
        width: 150,
        height: 150,
    },
    centerScreen: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        minHeight: '100vh',
        margin: 'auto'
    }
}));

export const SignIn = () => {
    const [login_text, setLogin] = useState('');
    const [pass_text, setPass] = useState('');
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();
    const selector = useSelector((state: IAppState) => state.auth);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [cookies, setCookie] = useCookies(['access_token']);

    const handleClick = async () => {
        const res = await dispatch(authorization({ login: login_text, password: pass_text }))
        if (res) {
            setCookie("access_token", res, { path: "/", httpOnly: true });
            history.push('/');
        }
    }

    return (
        <Loading loading={selector.loadState}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <img className={classes.img} src={boy} alt="boy" />
                    <Typography className={classes.authText} component="h1" variant="h4">
                        Авторизация
                        </Typography>
                    <form className={classes.form} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="text"
                            type="text"
                            label="Логин"
                            name="text"
                            autoFocus
                            onChange={x => setLogin(x.target.value)}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Пароль"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={x => setPass(x.target.value)}
                        />
                        <Button
                            onClick={handleClick}
                            className={classes.submit}
                            variant="contained"
                            color="primary"
                            fullWidth
                        >
                            Авторизироваться
                            </Button>
                    </form>
                </div>
            </Container>
        </Loading>
    )
}