import React from "react";
import ReactDOM from "react-dom";
import Home from './pages/containers/home';
import './styles/index.css';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import cyan from '@material-ui/core/colors/cyan';

const theme = createMuiTheme({
    palette: {
        primary: cyan,
    },
});

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <Home />
    </MuiThemeProvider>
    , document.getElementById("app"));