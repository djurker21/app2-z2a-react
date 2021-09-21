import * as React from "react";
import { makeStyles } from "@mui/styles";
import { Drawer } from "@mui/material";
import { ReactChild, ReactChildren } from "react";
import Typography from "@mui/material/Typography";
import { List } from "@mui/material";
import { ListItem } from "@mui/material";
import { ListItemText } from "@mui/material";
import { useHistory } from "react-router-dom";

interface AuxProps {
  children: ReactChild | ReactChildren;
}

const drawerWidth = 240;

const useStyles = makeStyles({
  page: {
    background: "#f9f9f9",
    width: "100%",
  },
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  root: {
    display: "flex",
  },
  active: {
    background: "#f4f4f4",
  },
});

export default function Layout({ children }: AuxProps) {
  const classes = useStyles();
  const history = useHistory();

  const menuItems = [
    {
      text: "countries",
      path: "/cml",
    },
    {
      text: "map",
      path: "/map",
    },
  ];

  return (
    <div className={classes.root}>
      {/*app bar*/}

      {/*side drawer*/}
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div>
          <Typography variant="h5">Countries App</Typography>
        </div>
        <List>
          {menuItems.map((item, i) => (
            <ListItem button key={i} onClick={() => history.push(item.path)}>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      <div className={classes.page}>{children}</div>
    </div>
  );
}
