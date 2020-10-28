
import React from 'react';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
}));

export default function Uploadbtn() {
    const classes = useStyles();

    return (
        <div>
            <input
                accept="image/*"
                className={classes.input}
                
                id="contained-button-file"
                multiple
                type="file"
            />
            <label htmlFor="contained-button-file">
                <Button variant="contained" component="span" color="secondary" className={classes.button}>
                    Upload
                    <CloudUploadIcon className={classes.rightIcon + "ml-5"} />
                </Button>
            </label>
        </div>
    );
}
