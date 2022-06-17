import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";
import { AuthContextProvider } from "./context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <BrowserRouter>
        <AuthContextProvider>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </AuthContextProvider>
    </BrowserRouter>
);
