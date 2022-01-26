import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {store} from "./store";
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import App from "./component/App";

const theme = createTheme()

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <CssBaseline enableColorScheme/>
            <App/>
        </ThemeProvider>
    </Provider>,
    document.getElementById('root')
);
