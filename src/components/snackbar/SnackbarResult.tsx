import React, { FC } from "react";
import Snackbar from "@material-ui/core/Snackbar";

export interface IProps {
    text: string;
    handleClose: () => void;
    open: boolean;
}

export const PositionedSnackbar: FC<IProps> = ({ text, handleClose, open }) => {
    return (
        <Snackbar
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={open}
            autoHideDuration={3}
            onClose={handleClose}
            message={text}
        />
    );
}