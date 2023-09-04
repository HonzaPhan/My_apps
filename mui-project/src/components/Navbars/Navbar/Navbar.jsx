import { AppBar, Avatar, Badge, InputBase, Menu, MenuItem, Typography } from "@mui/material";
import PetsIcon from "@mui/icons-material/Pets";
import React, { useState } from "react";
import { Mail, Notifications } from "@mui/icons-material";
import StyledToolBar from "./toolbar";
import Icons from "./icons";
import SearchBar from "./searchbar";
import UserBox from "./userbox";

const Navbar = () => {
    const [open, setOpen] = useState(false)

  return (
    <AppBar position="sticky">
      <StyledToolBar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Lophy
        </Typography>
        <PetsIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <SearchBar>
          <InputBase placeholder="Search..." />
        </SearchBar>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80"
            onClick={(e) => setOpen(true)}
          ></Avatar>
        </Icons>
        <UserBox>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80"
            onClick={(e) => setOpen(true)}
          ></Avatar>
          <Typography variant="span">Johnny</Typography>
        </UserBox>
      </StyledToolBar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
