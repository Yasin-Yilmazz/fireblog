import { Box, Typography } from "@mui/material";
import BlogCard from "../components/BlogCard";

const Home = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        fontFamily: "Rubik Marker Hatch, cursive",
        height: "100vh",
        maxWidth: "100vw",
      }}
    >
      <Typography variant='h3' pt={4} sx={{ fontFamily: "Girassol, cursive" }}>
        DASHBOARD
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 4,
          mt: 4,
        }}
      >
        <BlogCard />
      </Box>
    </Box>
  );
};

export default Home;
