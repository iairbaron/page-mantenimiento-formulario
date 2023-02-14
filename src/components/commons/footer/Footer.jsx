import React from "react";
import logo from "../../../images/ca822f_2200d6424a8c407d889ab01ed17b5eb5_mv2.png"

import {
    AppBar,
    Toolbar,
    Typography,
} from "@material-ui/core";
import { Phone } from "@material-ui/icons";


const Footer = () => <>
        <AppBar position="static" elevation={0} component="footer" color="default" >
            <Toolbar style={{ justifyContent: "center", gap:"5%" }}>
                <img  src={logo} style={{width:"8%"}} />
                <Typography variant="caption"><Phone/>   </Typography>
            </Toolbar>
        </AppBar>
    </>

export default Footer;