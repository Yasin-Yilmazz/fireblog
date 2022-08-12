import { Box, Typography } from '@mui/material';
import React, { useContext } from 'react';
import BlogCard from '../components/BlogCard';
import { BlogContext } from '../context/BlogContext';

const Home = () => {
  const { dataList } = useContext(BlogContext);
  const data = [dataList];
  return (
    <Box
      sx={{
        textAlign: 'center',
        fontFamily: 'Rubik Marker Hatch, cursive',
        height: '100vh',
        overflow: 'auto',
      }}
    >
      <Typography variant="h3" pt={4} sx={{ fontFamily: 'Girassol, cursive' }}>
        DASHBOARD
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDiretion: 'row',
          gap: 4,
          mt: 4,
          cursor: 'pointer',
        }}
      >
        {data?.map((data, index) => {
          return <BlogCard data={data} key={index} />;
        })}
      </Box>
    </Box>
  );
};

export default Home;
