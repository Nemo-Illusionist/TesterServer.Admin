import { makeStyles, createStyles, Theme } from '@material-ui/core';

export const useStylesDrawer = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
  }),
);

export const LinkStyles = makeStyles((theme: Theme) =>
  createStyles({
    link: {
      textDecoration: 'none',
      color: 'rgba(0, 0, 0, 0.87)',
    },
  }),
);
