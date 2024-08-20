"use client";
import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import { Button } from '@mui/material';
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import Link from "next/link";

const pages = [
  { name: "Home", link: "/" },
  { name: "Write Blog", link: "/create-blog" },
  { name: "Edit/Delete Blog", link: "/edit-delete-blog" },
];
function TopMenu() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <Box height={200}
    width={500}
    my={4}
    display="flex"
    alignItems="center"
    gap={4}
    p={2}>
      <><Button variant="contained" href="/create-blog">
      Write Blog
    </Button><Button variant="contained" href="/create-blog">
        Edit/Delete Blog

      </Button></>
      </Box>
  );
}

export default TopMenu;
