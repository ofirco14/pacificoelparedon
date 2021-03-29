import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";

$(document).scroll(function () {
  var y = $(this).scrollTop();
  if (y > 420) {
    $("#burger-bar-scrolled").addClass("show");
  } else {
    $("#burger-bar-scrolled").removeClass("show");
  }
});
const theme = createMuiTheme({
  typography: {
    fontFamily: `"Josefin Sans", "Helvetica", "Arial", sans-serif`,
    fontSize: 14,
    color: "black",
    fontWeight: "bold",
  },
});
ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
