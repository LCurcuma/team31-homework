"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

const pages = [
  {
    name: "exercise1",
    link: "http://localhost:3000/exercise1",
  },
  {
    name: "exercise2",
    link: "http://localhost:3000/exercise2",
  },
  {
    name: "exercise3",
    link: "http://localhost:3000/exercise3",
  },
];

export default function Page() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: {
                xs: "none",
                md: "flex",
              },
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            WebSite
          </Typography>
        </Toolbar>
        <Box
          sx={{
            flexGrow: 1,
            display: {
              xs: "flex",
              md: "none",
            },
          }}
        >
          <IconButton
            size="large"
            aria-label="menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: {
                xs: "block",
                md: "none",
              },
            }}
          >
            {pages.map((page) => (
              <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                <a href={page.link}>
                  <Typography textAlign="center">{page.name}</Typography>
                </a>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        {/* Logo/Brand for small screens */}
        <Typography
          variant="h6"
          noWrap
          component="a"
          href=""
          sx={{
            flexGrow: 1,
            display: { xs: "flex", md: "none" },
            fontWeight: 700,
            color: "inherit",
            textDecoration: "none",
          }}
        >
          MySite
        </Typography>

        {/* Menu buttons for large screens */}
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          {pages.map((page) => (
            <a href={page.link} key={page.name}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page.name}
              </Button>
            </a>
          ))}
        </Box>
      </Container>
    </AppBar>
  );
}
