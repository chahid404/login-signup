
import Uploadbtn from './Uploadbtn';
import { Card } from "react-bootstrap";

import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useState } from 'react';
const React = require('react')
const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
}));

function Upload() {
    //class Upload extends React.Component {

    const [file, setFile] = useState(null);
    const classes = useStyles();

    function handleChange(event) {
        setFile(URL.createObjectURL(event.target.files[0]));

    }


    return (
        <>
            {/* <Card style={{ width: '200px' }}>

                <Card.Body>
                    <Card.Title>Logo 200x70</Card.Title>
                    <input
                        className={classes.input}
                        accept="image/*"
                        id="contained-button-file"
                        multiple
                        onChange={handleChange}
                        type="file"
                    />
                    <label htmlFor="contained-button-file">
                        <Button variant="contained" component="span" color="secondary" className={classes.button}>
                            Upload
                    <CloudUploadIcon className={classes.rightIcon} />
                        </Button>
                    </label>
                    <Card.Img variant="top" src={file} />
                </Card.Body>
            </Card> */}
            <p>Logo:</p>
            <div className="input-group mb-3">
            
                <div className="custom-file">
                
                    <input accept="image/*" className={classes.input} type="file" className="custom-file-input" id="inputGroupFile01" onChange={handleChange}/>
                    <label className="custom-file-label" htmlFor="inputGroupFile01">Logo 200 x 78 px</label>
                </div>
                
            </div>
            <img src={file} width="200px" height="80px"/>

        </>



    );

}
export default Upload