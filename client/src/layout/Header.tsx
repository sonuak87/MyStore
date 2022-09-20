import * as React from "react";
import Box from "@mui/material/Box";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import {
  AppBar,
  List,
  ListItem,
  Switch,
  Toolbar,
  Typography,
  Badge,
  IconButton,
} from "@mui/material";
import { Link, NavLink } from "react-router-dom";
const NavStyle = {
  color: "inherit",
  typography: "h6",
  "&:hover": {
    color: "secondary.main",
  },
  "&.active": {
    color: "secondary.main",
  },
};
type Props = {
  onChange: () => void;
};
const midbar = [
  { title: "Catalog", path: "/products" },
  { title: "About", path: "/about" },
  { title: "Contact", path: "/contact" },
];
const Rightbar = [
  { title: "Login", path: "/login" },
  { title: "Register", path: "/register" },
];
const Header = ({ onChange }: Props) => {
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box display="flex" alignItems="center">
          <Typography variant="h6">MY-STORE</Typography>
          <Switch onChange={onChange} />
        </Box>
        <List sx={{ display: "flex", color: "inherit" }}>
          {midbar.map(({ title, path }) => (
            <ListItem component={NavLink} to={path} sx={NavStyle} key={path}>
              {title.toUpperCase()}
            </ListItem>
          ))}
        </List>
        <Box display="flex" alignItems="center">
          <IconButton size="large" color="inherit">
            <Badge badgeContent={4} color="error">
              <ShoppingCart />
            </Badge>
          </IconButton>
          <List sx={{ display: "flex", color: "inherit" }}>
            {Rightbar.map(({ title, path }) => (
              <ListItem component={NavLink} to={path} sx={NavStyle} key={path}>
                {title.toUpperCase()}
              </ListItem>
            ))}
          </List>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
