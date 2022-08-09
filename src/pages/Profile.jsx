import { Avatar, Button, TextField, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Stack } from '@mui/material';
import { BlogContext } from '../context/BlogContext';

const Profile = () => {
  const { currentUser } = useContext(AuthContext);
  const { profileImgUrl, setProfileImgUrl } = useContext(BlogContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(profileImgUrl);
  };

  return (
    <form
      style={{
        margin: 'auto',
        padding: '5rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem',
      }}
      onSubmit={handleSubmit}
    >
      <Stack spacing={2}>
        <Avatar sx={{ padding: '5rem' }} variant="rounded">
          <img
            style={{ textAlign: 'centers' }}
            width="200px"
            src={
              profileImgUrl
                ? profileImgUrl
                : 'https://picsum.photos/id/237/200/160'
            }
          />
        </Avatar>
      </Stack>
      <Typography variant="h6" color="#41B3A3">
        {currentUser.displayName}
      </Typography>
      <Typography variant="h6" color="#41B3A3">
        {currentUser.email}
      </Typography>
      <TextField
        id="outlined-basic"
        name="image-url"
        label="Image URL"
        type="text"
        variant="outlined"
        value={profileImgUrl}
        onChange={(e) => setProfileImgUrl(e.target.value)}
      />
      <Button
        type="submit"
        variant="contained"
        size="large"
        sx={{ backgroundColor: '#E8A87C' }}
      >
        Set Image
      </Button>
    </form>
  );
};

export default Profile;
