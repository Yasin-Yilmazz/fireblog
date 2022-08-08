import { Avatar, TextField, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Formik } from 'formik';

const Profile = () => {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);
  return (
    <Formik
      initialValues={{ url: '' }}
      onSubmit={(values, actions) => {
        actions.resetForm();
        actions.setSubmitting(false);
      }}
    >
      <div style={{ margin: 'auto', padding: '5rem' }}>
        <Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          sx={{ padding: '4rem' }}
        />
        <Typography variant="h6" padding=".5rem" color="#41B3A3">
          {currentUser.displayName}
        </Typography>
        <Typography variant="h6" padding=".5rem" color="#41B3A3">
          {currentUser.email}
        </Typography>
        <TextField id="outlined-basic" label="Image URL" variant="outlined" />
      </div>
    </Formik>
  );
};

export default Profile;
