"use client";
import Box from "@mui/material/Box";
import { Button } from '@mui/material';

const pages = [
  { name: "Home", link: "/" },
  { name: "Write Blog", link: "/create-blog" },
  { name: "Edit/Delete Blog", link: "/edit-delete-blog" },
];
function TopMenu() {

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
    </Button><Button variant="contained" href="/edit-delete-blog">
        Edit/Delete Blog

      </Button></>
      </Box>
  );
}

export default TopMenu;
