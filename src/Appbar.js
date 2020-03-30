import React from "react";
import AppBar from "material-ui/AppBar";
import * as Colors from "material-ui/styles/colors";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
const muiTheme = getMuiTheme({
  palette: {
    textColor: Colors.darkBlack,
    primary1Color: Colors.grey900,
    primary2Color: Colors.indigo700,
    accent1Color: Colors.redA200,
    pickerHeaderColor: Colors.darkBlack,
    alternateTextColor: Colors.white
  }
});

const AppBarExampleIcon = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <AppBar
      title="Basic CRUD App"
      //iconClassNameRight="muidocs-icon-navigation-expand-more"
    />
  </MuiThemeProvider>
);

export default AppBarExampleIcon;
