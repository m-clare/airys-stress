import React, { Component } from "react";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import "./App.css";
import SimpleExpansionPanel from "./components/section";

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: "#00BCD4",
    },
    primary: {
      main: "#35F1B5",
    },
    error: {
      main: "#FF6F00",
    },
  },
  typography: {
    fontFamily: ['"Latin Modern Roman"', "serif"].join(","),
  },
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <SimpleExpansionPanel />
      </div>
    );
  }
}

export default App;
