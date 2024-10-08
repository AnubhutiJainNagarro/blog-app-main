import Box from "@mui/material/Box";
import styles from "./page.module.css";
import ExploreBlogs from "@/components/blogs/ExploreBlogs";
import { blogApp } from "@/constants/constants";

export default function Page() {
  return (
      <Box className={styles.main}>
        <h1>{blogApp.exploreBlogs}</h1>
        <ExploreBlogs page="explore"></ExploreBlogs>
      </Box>
  );
}
